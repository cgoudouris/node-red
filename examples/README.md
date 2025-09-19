# Exemplos de Fluxos FRAM - Node-RED

Este diret�rio cont�m exemplos pr�ticos do node FRAM avan�ado para Node-RED, demonstrando os diferentes perfis de interpreta��o e funcionalidades.

## Arquivos de Exemplo

### 1. Sistema Industrial - Perfil Tecnol�gico
**Arquivo:** `industrial-control-flow.json`

**Caracter�sticas:**
- Perfil de interpreta��o: Tecnol�gico
- Foco: Precis�o, timing e confiabilidade
- Contexto: Sistema de controle de processo industrial automatizado

**Aspectos FRAM Demonstrados:**
- **Input**: Dados de sensores industriais (temperatura, press�o, flow_rate, pH, turbidez)
- **Preconditions**: Status do sistema, certifica��es ISO, safety interlocks
- **Resources**: Capacidade de processamento (CPU, mem�ria, rede)
- **Time**: Controle de timing cr�tico (100ms cycle time, �2ms jitter)
- **Control**: Sistema de automa��o com PID tuning

**Funcionalidades Especiais:**
- Monitor de seguran�a com detec��o de resson�ncia funcional
- An�lise de performance em tempo real
- Sequ�ncia automatizada de teste com varia��o temporal
- Metadados industriais (certifica��es, calibra��es, redund�ncia)

---

### 2. Controle de Tr�fego A�reo - Perfil Humano
**Arquivo:** `air-traffic-control-flow.json`

**Caracter�sticas:**
- Perfil de interpreta��o: Humano
- Foco: Cogni��o, fadiga e tomada de decis�o
- Contexto: Sistema ATC com an�lise de fatores cognitivos

**Aspectos FRAM Demonstrados:**
- **Input**: Situa��o de tr�fego (n�mero de aeronaves, complexidade, emerg�ncias)
- **Preconditions**: Status do controlador (certifica��o, experi�ncia, fadiga)
- **Resources**: Recursos cognitivos (carga mental, aten��o, mem�ria)
- **Time**: Press�o temporal (janelas de decis�o, urg�ncia)
- **Control**: Tomada de decis�o humana (confian�a, expertise, coordena��o)

**Funcionalidades Especiais:**
- Monitor especializado de fadiga e carga mental
- Simula��o de cen�rios cr�ticos (emerg�ncias m�ltiplas)
- An�lise de varia��o da carga mental durante o turno
- Metadados de fatores humanos (NASA-TLX, certifica��es ICAO)

---

### 3. Aprova��o Or�ament�ria - Perfil Organizacional
**Arquivo:** `budget-approval-flow.json`

**Caracter�sticas:**
- Perfil de interpreta��o: Organizacional
- Foco: Pol�ticas, conformidade e governan�a
- Contexto: Processo de aprova��o or�ament�ria corporativa

**Aspectos FRAM Demonstrados:**
- **Input**: Solicita��es or�ament�rias (valor, departamento, justificativa)
- **Preconditions**: Condi��es organizacionais (ano fiscal, autoridade, auditoria)
- **Resources**: Capacidade de aprova��o (disponibilidade, expertise, autoridade)
- **Time**: Timeline de aprova��o (prazos, backlog, press�o)
- **Control**: Framework de governan�a (compliance, segrega��o, auditoria)

**Funcionalidades Especiais:**
- Monitor de conformidade regulat�ria (SOX, ISO 9001)
- Sistema de escala��o organizacional
- Simula��o de fluxo completo de aprova��o
- Cen�rios de diferentes n�veis de compliance
- An�lise de resson�ncia em processos de governan�a

---

## Como Usar os Exemplos

### Pr�-requisitos
1. Node-RED instalado e funcionando
2. Node FRAM avan�ado instalado (arquivo `85-fram.js` e `85-fram.html`)
3. Node-RED executando em http://127.0.0.1:1880/

### Importa��o dos Fluxos

1. **Via Interface Web:**
   - Acesse Node-RED no navegador
   - V� para Menu ? Import
   - Cole o conte�do do arquivo JSON
   - Clique em Import

2. **Via API:**
   ```bash
   curl -X POST http://127.0.0.1:1880/flows \\
        -H "Content-Type: application/json" \\
        -d @industrial-control-flow.json
   ```

3. **Via Node-RED CLI:**
   ```bash
   node-red-admin flows set --flow industrial-control-flow.json
   ```

### Execu��o dos Exemplos

Cada fluxo cont�m bot�es de teste espec�ficos:

**Sistema Industrial:**
- "Iniciar Sequ�ncia de Teste" - Executa sequ�ncia automatizada
- Sensores individuais - Testa aspectos espec�ficos

**Controle de Tr�fego A�reo:**
- "Gerar Cen�rio Cr�tico" - Simula emerg�ncia m�ltipla
- "Simular Varia��o de Carga" - Testa evolu��o da fadiga

**Aprova��o Or�ament�ria:**
- "Simular Fluxo Completo" - Executa processo completo
- "Teste de Conformidade" - Testa diferentes n�veis de compliance

### Monitoramento dos Resultados

Todos os fluxos incluem m�ltiplos pontos de debug:

1. **An�lise FRAM Principal** - Output completo do node FRAM
2. **Logs Especializados** - An�lises espec�ficas do perfil
3. **Alertas** - Detec��o de problemas e resson�ncias
4. **Escala��es** - Situa��es que requerem aten��o

---

## Interpreta��o dos Resultados

### Estrutura da Sa�da FRAM

```json
{
  "functionName": "Nome_da_Fun��o",
  "interpretationProfile": "technological|human|organizational",
  "aspects": {
    "input": { "dados_de_entrada": "..." },
    "preconditions": { "condi��es_pr�vias": "..." },
    "resources": { "recursos_dispon�veis": "..." },
    "time": { "aspectos_temporais": "..." },
    "control": { "controles_aplicados": "..." }
  },
  "performance": {
    "timing": "precise|on-time|too-early|too-late",
    "precision": "precise|acceptable|approximate",
    "timing_analysis": "...",
    "precision_analysis": "..."
  },
  "resonance": {
    "detected": true|false,
    "intensity": 0.0-1.0,
    "affected_aspects": ["..."],
    "propagation_risk": "low|medium|high"
  },
  "advancedAnalysis": {
    "riskAssessment": { "overallRisk": "low|medium|high" },
    "recommendations": ["..."],
    "complianceCheck": { "status": "compliant|non_compliant" }
  }
}
```

### Indicadores por Perfil

**Tecnol�gico:**
- Timing precis�o (�ms)
- Capacidade de recursos (CPU, mem�ria)
- Confiabilidade do sistema
- Performance de hardware

**Humano:**
- Carga mental (%)
- N�vel de fadiga
- Capacidade de aten��o
- Confian�a na decis�o

**Organizacional:**
- Compliance de pol�ticas (%)
- Autoridade de aprova��o
- Maturidade do processo
- Risco organizacional

---

## Personaliza��o e Extens�o

### Modificando os Exemplos

1. **Ajustar Thresholds:**
   ```javascript
   resourceThreshold: 70,  // Limite de recursos
   timeConstraint: "5days", // Restri��o temporal
   ```

2. **Adicionar Metadados:**
   ```javascript
   metadata: {
     custom_field: "valor",
     hierarchicalGroup: "Seu_Grupo"
   }
   ```

3. **Configurar Ontologia:**
   ```javascript
   ontologyMapping: {
     input: "seu_conceito_input",
     resources: "seu_conceito_recursos"
   }
   ```

### Criando Novos Cen�rios

Use os exemplos como template e modifique:
- Valores dos aspectos FRAM
- Metadados espec�ficos do dom�nio
- L�gica de monitoramento
- Crit�rios de escala��o

---

## Troubleshooting

### Problemas Comuns

1. **Node FRAM n�o encontrado:**
   - Verifique se os arquivos est�o em `/packages/node_modules/@node-red/nodes/core/function/`
   - Reinicie o Node-RED

2. **Erro de JSON:**
   - Valide a sintaxe JSON antes da importa��o
   - Verifique caracteres especiais

3. **Metadados n�o processados:**
   - Certifique-se de que `enableMetadata: true`
   - Verifique formato dos metadados

4. **Resson�ncia n�o detectada:**
   - Ajuste `enableResonance: true`
   - Verifique thresholds de variabilidade

### Logs de Debug

Ative logs detalhados adicionando ao function node:
```javascript
node.log("Debug info: " + JSON.stringify(payload));
```

---

## Refer�ncias

- [Documenta��o FRAM](../FRAM-Advanced-Node-Documentation.md)
- [Metodologia FRAM Original](https://www.functionalresonance.com/)
- [Node-RED Documentation](https://nodered.org/docs/)
- [FRAM Model Visualizer](https://functionalresonance.com/FMV/index.html)