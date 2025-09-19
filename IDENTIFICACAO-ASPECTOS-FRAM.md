# ?? Como o Node FRAM Identifica os Aspectos

## ?? Mecanismo de Identifica��o

O node FRAM utiliza **3 m�todos principais** para identificar qual aspecto FRAM cada input representa:

### 1. **Identifica��o por Topic (msg.topic)**

O m�todo mais preciso � atrav�s do `msg.topic`. O node analisa palavras-chave:

```javascript
function detectAspect(msg) {
    if (msg.topic) {
        var topic = msg.topic.toLowerCase();
        
        // Input Aspect
        if (topic.includes("input") || topic.includes("trigger") || 
            topic.includes("sensor") || topic.includes("data")) 
            return "input";
            
        // Preconditions Aspect  
        if (topic.includes("precondition") || topic.includes("condition") ||
            topic.includes("requirement") || topic.includes("prerequisite"))
            return "preconditions";
            
        // Resources Aspect
        if (topic.includes("resource") || topic.includes("material") ||
            topic.includes("energy") || topic.includes("capacity"))
            return "resources";
            
        // Time Aspect
        if (topic.includes("time") || topic.includes("timing") ||
            topic.includes("schedule") || topic.includes("duration"))
            return "time";
            
        // Control Aspect
        if (topic.includes("control") || topic.includes("supervision") ||
            topic.includes("parameter") || topic.includes("config"))
            return "control";
    }
    
    // Default: input se n�o identificado
    return "input";
}
```

### 2. **Identifica��o Expl�cita (msg.framAspect)**

Voc� pode especificar diretamente qual aspecto FRAM:

```javascript
// Exemplo de mensagem com aspecto expl�cito
msg = {
    payload: {"vehiculos": 15, "status": "normal"},
    framAspect: "input",  // ? Identifica��o expl�cita
    topic: "sensores_trafico"
}
```

### 3. **Configura��o do Node**

O node tamb�m usa a configura��o interna para mapear:

```javascript
// Configura��o do node
this.inputAspect = "sensores_trafico";
this.resourcesAspect = "recursos_sistema";
this.timeAspect = "controle_temporal";
// etc...
```

## ?? Exemplos Pr�ticos

### **Cen�rio 1: Sistema de Sem�foro**

```javascript
// Input detectado como "input" (sensores)
{
    topic: "input_traffic_sensors",
    payload: {"vehicles": 12, "pedestrians": 3}
}

// Detectado como "resources" (recursos)  
{
    topic: "resource_energy_system",
    payload: {"battery": 95, "connectivity": "online"}
}

// Detectado como "time" (temporal)
{
    topic: "timing_traffic_control", 
    payload: {"cycle": 60, "green_time": 30}
}

// Detectado como "control" (controle)
{
    topic: "control_parameters",
    payload: {"mode": "automatic", "priority": false}
}

// Detectado como "preconditions" (pr�-condi��es)
{
    topic: "precondition_environment",
    payload: {"rain": false, "visibility": "good"}
}
```

### **Cen�rio 2: Sistema Industrial**

```javascript
// Usando identifica��o expl�cita
{
    payload: {"temperature": 75, "pressure": 2.1},
    framAspect: "input",  // ? For�a como input
    topic: "process_data"
}

{
    payload: {"operators": 3, "tools": "available"},
    framAspect: "resources",  // ? For�a como resources
    topic: "factory_resources"
}
```

## ?? Fluxo de Processamento

```
1. Mensagem chega ? Node FRAM
2. Verifica msg.framAspect (expl�cito)
   ?? Se existe ? Usa diretamente
   ?? Se n�o ? Analisa msg.topic
3. Analisa palavras-chave no topic
4. Identifica aspecto FRAM
5. Armazena no framState[aspecto]
6. Verifica se pode executar fun��o
7. Executa an�lise FRAM se completo
```

## ?? Estado Interno do Node

O node mant�m um estado interno para cada aspecto:

```javascript
this.framState = {
    input: {
        value: {...dados...},
        timestamp: 1695127200000,
        topic: "sensor_trafico", 
        variability: 0.15
    },
    preconditions: {
        value: {...dados...},
        timestamp: 1695127195000,
        topic: "condicoes_ambiente",
        variability: 0.08
    },
    resources: {
        value: {...dados...},
        timestamp: 1695127190000,
        topic: "recursos_energia",
        variability: 0.12
    },
    // ... outros aspectos
}
```

## ? Execu��o da Fun��o FRAM

A fun��o s� executa quando:

1. **Aspectos m�nimos** est�o dispon�veis (geralmente input + 1 outro)
2. **Dados n�o est�o muito antigos** (timeout configur�vel)
3. **Variabilidade** est� dentro dos limites

```javascript
function canExecuteFunction() {
    var availableAspects = 0;
    var maxAge = 30000; // 30 segundos
    var now = Date.now();
    
    for (var aspect in node.framState) {
        if (node.framState[aspect] && 
            (now - node.framState[aspect].timestamp) < maxAge) {
            availableAspects++;
        }
    }
    
    return availableAspects >= 2; // M�nimo 2 aspectos
}
```

## ?? Dicas de Uso

### **Para M�xima Precis�o:**
```javascript
// Use framAspect expl�cito
msg.framAspect = "resources";
```

### **Para Simplicidade:**
```javascript
### **Para Simplicidade:**
```javascript
// Use topics descritivos com palavras em ingl�s
msg.topic = "input_sensors";     // ? input
msg.topic = "resource_cpu";      // ? resources
msg.topic = "timing_schedule";   // ? time
msg.topic = "control_params";    // ? control
msg.topic = "precondition_env";  // ? preconditions
```
```

### **Para M�ltiplos Inputs:**
```javascript
// Configure diferentes inject nodes
[Inject 1] topic: "input_sensors"     ? FRAM
[Inject 2] topic: "resources_system"  ? FRAM  
[Inject 3] topic: "time_scheduling"   ? FRAM
[Inject 4] topic: "control_params"    ? FRAM
[Inject 5] topic: "preconditions"     ? FRAM
```

O sistema � flex�vel e robusto, permitindo diferentes estrat�gias de identifica��o conforme sua necessidade! ??