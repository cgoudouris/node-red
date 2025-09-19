# ? CORREÇÃO: Como Usar o Node FRAM Corretamente

## ?? **Problema Identificado**

Você está **absolutamente correto**! Meus exemplos anteriores tinham **3 problemas graves**:

1. **Palavras em português** nos topics (que NÃO são detectadas)
2. **Não usavam `framAspect`** explícito quando necessário  
3. **Inconsistência** entre documentação e código real

## ?? **Soluções Corretas**

### **MÉTODO 1: framAspect Explícito (RECOMENDADO)**

```javascript
// ? CORRETO - Define aspecto explicitamente
{
    payload: {"sensors": ["temp", "pressure"], "status": "active"},
    framAspect: "input"  // ? Garante identificação correta
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

### **MÉTODO 2: Topic com Palavras-Chave em INGLÊS**

```javascript
// ? CORRETO - Palavras em inglês detectadas
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
// ? ERRADO - Palavras em português NÃO detectadas
{
    topic: "sensores_trafico",    // ? input (default, não detectado)
    topic: "recursos_sistema",    // ? input (default, não detectado) 
    topic: "controle_temporal",   // ? input (default, não detectado)
}

// ? ERRADO - Sem framAspect e topic ambíguo
{
    topic: "dados_sistema",       // ? input (default)
    payload: {...}
}
```

## ?? **Palavras-Chave que o Código REALMENTE Detecta**

```javascript
// Código real do node FRAM:
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
- ? Usa `framAspect` explícito
- ? Usa topics com palavras em inglês
- ? Mostra comparação entre métodos
- ? Inclui exemplo do erro comum

### **Arquivos Corrigidos:**
- `exemplo-fram-trafico.json` - Corrigido com topics em inglês
- `teste-fram-simples.json` - Corrigido com framAspect explícito  
- Documentação atualizada

## ?? **Recomendação de Uso**

### **Para Máxima Confiabilidade:**
```javascript
// Use SEMPRE framAspect explícito
msg.framAspect = "input";
msg.framAspect = "resources";
msg.framAspect = "time";
msg.framAspect = "control";  
msg.framAspect = "preconditions";
```

### **Para Conveniência:**
```javascript
// Use topics em inglês com palavras-chave
msg.topic = "input_sensors";
msg.topic = "resource_energy";
msg.topic = "timing_schedule";
msg.topic = "control_params";
msg.topic = "precondition_check";
```

## ? **Teste Agora**

1. **Importe** `exemplo-correto-fram.json`
2. **Teste** os botões "Explícito" vs "Topic"  
3. **Veja** no debug como cada método funciona
4. **Compare** com o exemplo errado (português)

**Obrigado por apontar essas inconsistências!** Agora os exemplos funcionam corretamente com o código implementado. ??