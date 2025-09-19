# Exemplos de Fluxos FRAM - Node-RED

Este diretório contém exemplos práticos do node FRAM avançado para Node-RED, demonstrando os diferentes perfis de interpretação e funcionalidades.

## Arquivos de Exemplo

### 1. Sistema Industrial - Perfil Tecnológico
**Arquivo:** `industrial-control-flow.json`

**Características:**
- Perfil de interpretação: Tecnológico
- Foco: Precisão, timing e confiabilidade
- Contexto: Sistema de controle de processo industrial automatizado

**Aspectos FRAM Demonstrados:**
- **Input**: Dados de sensores industriais (temperatura, pressão, flow_rate, pH, turbidez)
- **Preconditions**: Status do sistema, certificações ISO, safety interlocks
- **Resources**: Capacidade de processamento (CPU, memória, rede)
- **Time**: Controle de timing crítico (100ms cycle time, ±2ms jitter)
- **Control**: Sistema de automação com PID tuning

**Funcionalidades Especiais:**
- Monitor de segurança com detecção de ressonância funcional
- Análise de performance em tempo real
- Sequência automatizada de teste com variação temporal
- Metadados industriais (certificações, calibrações, redundância)

---

### 2. Controle de Tráfego Aéreo - Perfil Humano
**Arquivo:** `air-traffic-control-flow.json`

**Características:**
- Perfil de interpretação: Humano
- Foco: Cognição, fadiga e tomada de decisão
- Contexto: Sistema ATC com análise de fatores cognitivos

**Aspectos FRAM Demonstrados:**
- **Input**: Situação de tráfego (número de aeronaves, complexidade, emergências)
- **Preconditions**: Status do controlador (certificação, experiência, fadiga)
- **Resources**: Recursos cognitivos (carga mental, atenção, memória)
- **Time**: Pressão temporal (janelas de decisão, urgência)
- **Control**: Tomada de decisão humana (confiança, expertise, coordenação)

**Funcionalidades Especiais:**
- Monitor especializado de fadiga e carga mental
- Simulação de cenários críticos (emergências múltiplas)
- Análise de variação da carga mental durante o turno
- Metadados de fatores humanos (NASA-TLX, certificações ICAO)

---

### 3. Aprovação Orçamentária - Perfil Organizacional
**Arquivo:** `budget-approval-flow.json`

**Características:**
- Perfil de interpretação: Organizacional
- Foco: Políticas, conformidade e governança
- Contexto: Processo de aprovação orçamentária corporativa

**Aspectos FRAM Demonstrados:**
- **Input**: Solicitações orçamentárias (valor, departamento, justificativa)
- **Preconditions**: Condições organizacionais (ano fiscal, autoridade, auditoria)
- **Resources**: Capacidade de aprovação (disponibilidade, expertise, autoridade)
- **Time**: Timeline de aprovação (prazos, backlog, pressão)
- **Control**: Framework de governança (compliance, segregação, auditoria)

**Funcionalidades Especiais:**
- Monitor de conformidade regulatória (SOX, ISO 9001)
- Sistema de escalação organizacional
- Simulação de fluxo completo de aprovação
- Cenários de diferentes níveis de compliance
- Análise de ressonância em processos de governança

---

## Como Usar os Exemplos

### Pré-requisitos
1. Node-RED instalado e funcionando
2. Node FRAM avançado instalado (arquivo `85-fram.js` e `85-fram.html`)
3. Node-RED executando em http://127.0.0.1:1880/

### Importação dos Fluxos

1. **Via Interface Web:**
   - Acesse Node-RED no navegador
   - Vá para Menu ? Import
   - Cole o conteúdo do arquivo JSON
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

### Execução dos Exemplos

Cada fluxo contém botões de teste específicos:

**Sistema Industrial:**
- "Iniciar Sequência de Teste" - Executa sequência automatizada
- Sensores individuais - Testa aspectos específicos

**Controle de Tráfego Aéreo:**
- "Gerar Cenário Crítico" - Simula emergência múltipla
- "Simular Variação de Carga" - Testa evolução da fadiga

**Aprovação Orçamentária:**
- "Simular Fluxo Completo" - Executa processo completo
- "Teste de Conformidade" - Testa diferentes níveis de compliance

### Monitoramento dos Resultados

Todos os fluxos incluem múltiplos pontos de debug:

1. **Análise FRAM Principal** - Output completo do node FRAM
2. **Logs Especializados** - Análises específicas do perfil
3. **Alertas** - Detecção de problemas e ressonâncias
4. **Escalações** - Situações que requerem atenção

---

## Interpretação dos Resultados

### Estrutura da Saída FRAM

```json
{
  "functionName": "Nome_da_Função",
  "interpretationProfile": "technological|human|organizational",
  "aspects": {
    "input": { "dados_de_entrada": "..." },
    "preconditions": { "condições_prévias": "..." },
    "resources": { "recursos_disponíveis": "..." },
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

**Tecnológico:**
- Timing precisão (±ms)
- Capacidade de recursos (CPU, memória)
- Confiabilidade do sistema
- Performance de hardware

**Humano:**
- Carga mental (%)
- Nível de fadiga
- Capacidade de atenção
- Confiança na decisão

**Organizacional:**
- Compliance de políticas (%)
- Autoridade de aprovação
- Maturidade do processo
- Risco organizacional

---

## Personalização e Extensão

### Modificando os Exemplos

1. **Ajustar Thresholds:**
   ```javascript
   resourceThreshold: 70,  // Limite de recursos
   timeConstraint: "5days", // Restrição temporal
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

### Criando Novos Cenários

Use os exemplos como template e modifique:
- Valores dos aspectos FRAM
- Metadados específicos do domínio
- Lógica de monitoramento
- Critérios de escalação

---

## Troubleshooting

### Problemas Comuns

1. **Node FRAM não encontrado:**
   - Verifique se os arquivos estão em `/packages/node_modules/@node-red/nodes/core/function/`
   - Reinicie o Node-RED

2. **Erro de JSON:**
   - Valide a sintaxe JSON antes da importação
   - Verifique caracteres especiais

3. **Metadados não processados:**
   - Certifique-se de que `enableMetadata: true`
   - Verifique formato dos metadados

4. **Ressonância não detectada:**
   - Ajuste `enableResonance: true`
   - Verifique thresholds de variabilidade

### Logs de Debug

Ative logs detalhados adicionando ao function node:
```javascript
node.log("Debug info: " + JSON.stringify(payload));
```

---

## Referências

- [Documentação FRAM](../FRAM-Advanced-Node-Documentation.md)
- [Metodologia FRAM Original](https://www.functionalresonance.com/)
- [Node-RED Documentation](https://nodered.org/docs/)
- [FRAM Model Visualizer](https://functionalresonance.com/FMV/index.html)