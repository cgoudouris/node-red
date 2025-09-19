# ? CORRE��O: Como Usar o Node FRAM Corretamente

## ?? **Problema Identificado**

Voc� est� **absolutamente correto**! Meus exemplos anteriores tinham **3 problemas graves**:

1. **Palavras em portugu�s** nos topics (que N�O s�o detectadas)
2. **N�o usavam `framAspect`** expl�cito quando necess�rio  
3. **Inconsist�ncia** entre documenta��o e c�digo real

## ?? **Solu��es Corretas**

### **M�TODO 1: framAspect Expl�cito (RECOMENDADO)**

```javascript
// ? CORRETO - Define aspecto explicitamente
{
    payload: {"sensors": ["temp", "pressure"], "status": "active"},
    framAspect: "input"  // ? Garante identifica��o correta
}

{
    payload: {"energy": 85, "memory": 75},
    framAspect: "resources"  // ? Sempre funciona
}

{
    payload: {"cycle_time": 30, "deadline": "16:00:00"},
    framAspect: "time"  // ? Sem ambiguidade
}
```

### **M�TODO 2: Topic com Palavras-Chave em INGL�S**

```javascript
// ? CORRETO - Palavras em ingl�s detectadas
{
    topic: "input_sensor_data",        // ? input ?
    payload: {"temperature": 25}
}

{
    topic: "resource_system_status",   // ? resources ?  
    payload: {"power": 90}
}

{
    topic: "timing_control_schedule",  // ? time ?
    payload: {"interval": 60}
}

{
    topic: "control_parameters_config", // ? control ?
    payload: {"mode": "automatic"}
}

{
    topic: "precondition_environment", // ? preconditions ?
    payload: {"weather": "clear"}
}
```

### **? EXEMPLOS ERRADOS (que eu usei antes)**

```javascript
// ? ERRADO - Palavras em portugu�s N�O detectadas
{
    topic: "sensores_trafico",    // ? input (default, n�o detectado)
    topic: "recursos_sistema",    // ? input (default, n�o detectado) 
    topic: "controle_temporal",   // ? input (default, n�o detectado)
}

// ? ERRADO - Sem framAspect e topic amb�guo
{
    topic: "dados_sistema",       // ? input (default)
    payload: {...}
}
```

## ?? **Palavras-Chave que o C�digo REALMENTE Detecta**

```javascript
// C�digo real do node FRAM:
if (topic.includes("input") || topic.includes("trigger")) return "input";
if (topic.includes("precondition") || topic.includes("condition")) return "preconditions";
if (topic.includes("resource") || topic.includes("material")) return "resources";
if (topic.includes("time") || topic.includes("timing")) return "time";
if (topic.includes("control") || topic.includes("supervision")) return "control";
```

| Aspecto | Palavras Detectadas |
|---------|-------------------|
| **input** | `input`, `trigger` |
| **preconditions** | `precondition`, `condition` |
| **resources** | `resource`, `material` |
| **time** | `time`, `timing` |
| **control** | `control`, `supervision` |

## ?? **Exemplos Corrigidos**

### **Arquivo: `exemplo-correto-fram.json`** 
- ? Usa `framAspect` expl�cito
- ? Usa topics com palavras em ingl�s
- ? Mostra compara��o entre m�todos
- ? Inclui exemplo do erro comum

### **Arquivos Corrigidos:**
- `exemplo-fram-trafico.json` - Corrigido com topics em ingl�s
- `teste-fram-simples.json` - Corrigido com framAspect expl�cito  
- Documenta��o atualizada

## ?? **Recomenda��o de Uso**

### **Para M�xima Confiabilidade:**
```javascript
// Use SEMPRE framAspect expl�cito
msg.framAspect = "input";
msg.framAspect = "resources";
msg.framAspect = "time";
msg.framAspect = "control";  
msg.framAspect = "preconditions";
```

### **Para Conveni�ncia:**
```javascript
// Use topics em ingl�s com palavras-chave
msg.topic = "input_sensors";
msg.topic = "resource_energy";
msg.topic = "timing_schedule";
msg.topic = "control_params";
msg.topic = "precondition_check";
```

## ? **Teste Agora**

1. **Importe** `exemplo-correto-fram.json`
2. **Teste** os bot�es "Expl�cito" vs "Topic"  
3. **Veja** no debug como cada m�todo funciona
4. **Compare** com o exemplo errado (portugu�s)

**Obrigado por apontar essas inconsist�ncias!** Agora os exemplos funcionam corretamente com o c�digo implementado. ??