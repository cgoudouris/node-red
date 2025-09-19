# ?? Guia Pr�tico: Usando o Node FRAM no Node-RED

## ?? Vis�o Geral

O node FRAM implementa a metodologia **Functional Resonance Analysis Method** para an�lise de sistemas complexos. Este guia mostra como usar o node na pr�tica com um exemplo real.

## ?? Exemplo: Sistema de Sem�foro Inteligente

### 1. **Importar o Fluxo de Exemplo**

1. Acesse Node-RED em `http://127.0.0.1:1881`
2. V� em **Menu > Import**
3. Carregue o arquivo `exemplo-fram-trafico.json`
4. Clique em **Deploy**

### 2. **Estrutura do Fluxo**

```
[Sensores] ??
[Condi��es]??
[Recursos] ????? [FRAM] ??? [Debug] ??? [A��o Sem�foro] ??? [Sa�da]
[Tempo] ?????
[Controle]???
```

### 3. **Configura��o do Node FRAM**

#### **Entradas (5 Aspectos FRAM):**

1. **Input Aspect** (`sensores_trafico`)
   - Dados dos sensores de tr�fego
   - Exemplo: `{"vehiculos": 12, "pedestres": 3, "velocidade_media": 45}`

2. **Preconditions Aspect** (`condicoes_ambiente`)
   - Condi��es que devem existir
   - Exemplo: `{"chuva": false, "visibilidade": "boa", "horario_pico": true}`

3. **Resources Aspect** (`recursos_sistema`)
   - Recursos dispon�veis
   - Exemplo: `{"energia": 98, "conectividade": "online", "manutencao": "ok"}`

4. **Time Aspect** (`controle_temporal`)
   - Aspectos temporais do sistema
   - Exemplo: `{"ciclo_atual": 60, "tempo_verde": 30, "tempo_amarelo": 5}`

5. **Control Aspect** (`parametros_controle`)
   - Par�metros de controle
   - Exemplo: `{"algoritmo": "adaptativo", "prioridade_emergencia": false, "modo": "automatico"}`

#### **Sa�da:**
- **Output Aspect** (`decisao_semaforo`)
- An�lise FRAM completa com recomenda��es

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

#### **Sa�da do Node FRAM:**
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

#### **Interpreta��o:**

- **Performance Overall: 85%** - Sistema funcionando bem
- **Resson�ncia Detectada** - Intera��o entre sensores e controle temporal
- **Strength: 0.3** - Resson�ncia moderada (ajuste necess�rio)

### 6. **Cen�rios de Uso**

#### **Cen�rio 1: Tr�fego Normal**
```javascript
// Entrada
{"vehiculos": 8, "pedestres": 1, "velocidade_media": 50}

// Sa�da FRAM
acao: "manter"
duracao: 30
performance: 92%
```

#### **Cen�rio 2: Hora do Rush**
```javascript
// Entrada
{"vehiculos": 25, "pedestres": 8, "velocidade_media": 20}

// Sa�da FRAM
acao: "estender_verde"
duracao: 45
ressonancia: detectada
```

#### **Cen�rio 3: Condi��es Adversas**
```javascript
// Entrada
{"chuva": true, "visibilidade": "ruim", "energia": 60}

// Sa�da FRAM
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
// Sistema cr�tico (baixa variabilidade)
timingVariability: 0.05
precisionVariability: 0.03
efficiencyVariability: 0.1

// Sistema flex�vel (alta variabilidade)
timingVariability: 0.3
precisionVariability: 0.2
efficiencyVariability: 0.4
```

### 3. **Conecte com Outros Nodes**
- **MQTT** para IoT
- **HTTP Request** para APIs
- **Database** para hist�rico
- **Dashboard** para visualiza��o

## ?? Monitoramento e An�lise

### **M�tricas Importantes:**
1. **Performance Overall** - Sa�de geral do sistema
2. **Resonance Strength** - Intensidade das intera��es
3. **Aspects Received** - Completude dos dados
4. **Timing/Precision/Efficiency** - M�tricas espec�ficas

### **Alertas Recomendados:**
- Performance < 70% ? Investigar problemas
- Resonance > 0.5 ? Ajustar par�metros
- Aspects < 3 ? Dados insuficientes

## ? Pr�ximos Passos

1. **Teste** o exemplo fornecido
2. **Adapte** para seu sistema espec�fico
3. **Configure** alertas e monitoramento
4. **Integre** com dashboards e databases
5. **Documente** os resultados para an�lise FRAM

Este node FRAM transforma a metodologia te�rica em uma ferramenta pr�tica para an�lise de sistemas complexos em tempo real!