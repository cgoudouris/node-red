# ?? Guia Prático: Usando o Node FRAM no Node-RED

## ?? Visão Geral

O node FRAM implementa a metodologia **Functional Resonance Analysis Method** para análise de sistemas complexos. Este guia mostra como usar o node na prática com um exemplo real.

## ?? Exemplo: Sistema de Semáforo Inteligente

### 1. **Importar o Fluxo de Exemplo**

1. Acesse Node-RED em `http://127.0.0.1:1881`
2. Vá em **Menu > Import**
3. Carregue o arquivo `exemplo-fram-trafico.json`
4. Clique em **Deploy**

### 2. **Estrutura do Fluxo**

```
[Sensores] ??
[Condições]??
[Recursos] ????? [FRAM] ??? [Debug] ??? [Ação Semáforo] ??? [Saída]
[Tempo] ?????
[Controle]???
```

### 3. **Configuração do Node FRAM**

#### **Entradas (5 Aspectos FRAM):**

1. **Input Aspect** (`sensores_trafico`)
   - Dados dos sensores de tráfego
   - Exemplo: `{"vehiculos": 12, "pedestres": 3, "velocidade_media": 45}`

2. **Preconditions Aspect** (`condicoes_ambiente`)
   - Condições que devem existir
   - Exemplo: `{"chuva": false, "visibilidade": "boa", "horario_pico": true}`

3. **Resources Aspect** (`recursos_sistema`)
   - Recursos disponíveis
   - Exemplo: `{"energia": 98, "conectividade": "online", "manutencao": "ok"}`

4. **Time Aspect** (`controle_temporal`)
   - Aspectos temporais do sistema
   - Exemplo: `{"ciclo_atual": 60, "tempo_verde": 30, "tempo_amarelo": 5}`

5. **Control Aspect** (`parametros_controle`)
   - Parâmetros de controle
   - Exemplo: `{"algoritmo": "adaptativo", "prioridade_emergencia": false, "modo": "automatico"}`

#### **Saída:**
- **Output Aspect** (`decisao_semaforo`)
- Análise FRAM completa com recomendações

### 4. **Como Configurar o Node FRAM**

1. **Clique duplo** no node FRAM
2. **Configure os aspectos:**
   ```javascript
   Input Aspect: sensores_trafico
   Preconditions: condicoes_ambiente
   Resources: recursos_sistema
   Time: controle_temporal
   Control: parametros_controle
   Output: decisao_semaforo
   ```

3. **Ajuste a variabilidade:**
   ```javascript
   Timing Variability: 0.15    (15%)
   Precision Variability: 0.1   (10%)
   Efficiency Variability: 0.2  (20%)
   ```

### 5. **Interpretando os Resultados**

#### **Saída do Node FRAM:**
```json
{
  "framOutput": {
    "decisao_semaforo": {
      "modo": "automatico",
      "vehiculos": 12,
      "pedestres": 3,
      "acao_recomendada": "estender_verde"
    }
  },
  "performance": {
    "timing": 0.85,
    "precision": 0.90,
    "efficiency": 0.80,
    "overall": 0.85
  },
  "functionalResonance": {
    "detected": true,
    "strength": 0.3,
    "aspects": ["sensores_trafico", "controle_temporal"]
  },
  "aspectsReceived": 5,
  "lastUpdate": "2025-09-19T14:47:20.123Z"
}
```

#### **Interpretação:**

- **Performance Overall: 85%** - Sistema funcionando bem
- **Ressonância Detectada** - Interação entre sensores e controle temporal
- **Strength: 0.3** - Ressonância moderada (ajuste necessário)

### 6. **Cenários de Uso**

#### **Cenário 1: Tráfego Normal**
```javascript
// Entrada
{"vehiculos": 8, "pedestres": 1, "velocidade_media": 50}

// Saída FRAM
acao: "manter"
duracao: 30
performance: 92%
```

#### **Cenário 2: Hora do Rush**
```javascript
// Entrada
{"vehiculos": 25, "pedestres": 8, "velocidade_media": 20}

// Saída FRAM
acao: "estender_verde"
duracao: 45
ressonancia: detectada
```

#### **Cenário 3: Condições Adversas**
```javascript
// Entrada
{"chuva": true, "visibilidade": "ruim", "energia": 60}

// Saída FRAM
acao: "modo_seguro"
duracao: 45
performance: 65%
```

## ?? Personalizando para Seu Sistema

### 1. **Adapte os Aspectos**
```javascript
// Para sistema de elevador
inputAspect: "chamadas_elevador"
preconditionsAspect: "manutencao_ok"
resourcesAspect: "energia_motor"
timeAspect: "tempo_viagem"
controlAspect: "algoritmo_otimizacao"
```

### 2. **Ajuste a Variabilidade**
```javascript
// Sistema crítico (baixa variabilidade)
timingVariability: 0.05
precisionVariability: 0.03
efficiencyVariability: 0.1

// Sistema flexível (alta variabilidade)
timingVariability: 0.3
precisionVariability: 0.2
efficiencyVariability: 0.4
```

### 3. **Conecte com Outros Nodes**
- **MQTT** para IoT
- **HTTP Request** para APIs
- **Database** para histórico
- **Dashboard** para visualização

## ?? Monitoramento e Análise

### **Métricas Importantes:**
1. **Performance Overall** - Saúde geral do sistema
2. **Resonance Strength** - Intensidade das interações
3. **Aspects Received** - Completude dos dados
4. **Timing/Precision/Efficiency** - Métricas específicas

### **Alertas Recomendados:**
- Performance < 70% ? Investigar problemas
- Resonance > 0.5 ? Ajustar parâmetros
- Aspects < 3 ? Dados insuficientes

## ? Próximos Passos

1. **Teste** o exemplo fornecido
2. **Adapte** para seu sistema específico
3. **Configure** alertas e monitoramento
4. **Integre** com dashboards e databases
5. **Documente** os resultados para análise FRAM

Este node FRAM transforma a metodologia teórica em uma ferramenta prática para análise de sistemas complexos em tempo real!