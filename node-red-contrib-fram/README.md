# node-red-contrib-fram

A Node-RED node for Functional Resonance Analysis Method (FRAM) modeling and analysis.

## Overview

FRAM (Functional Resonance Analysis Method) is a method used to model and analyze the functions of a system to understand how variability can lead to different outcomes, including accidents and incidents. This Node-RED node provides a comprehensive implementation of FRAM analysis suitable for real-time monitoring and analysis of complex systems.

## Features

- **Six FRAM Aspects**: Complete support for Input, Preconditions, Resources, Time, Control, and Output aspects
- **Multiple Interpretation Profiles**: 
  - General: Standard FRAM analysis
  - Human: Cognitive factors, fatigue, decision-making analysis
  - Organizational: Governance, policies, compliance focus
  - Technological: Precision, timing, reliability emphasis
- **Advanced Analysis**: Risk assessment, completeness scoring, automated recommendations
- **Resonance Detection**: Real-time detection of functional resonance patterns
- **Metadata Support**: Rich metadata handling for complex system modeling
- **Hierarchical Grouping**: Support for complex system organization

## Installation

### Via Node-RED Palette Manager
1. Open Node-RED
2. Go to Menu ? Manage Palette
3. Select the Install tab
4. Search for `node-red-contrib-fram`
5. Click Install

### Via npm
```bash
npm install node-red-contrib-fram
```

### Manual Installation
```bash
cd ~/.node-red
npm install node-red-contrib-fram
```

## Usage

### Basic Setup

1. Drag the **fram** node from the analysis category into your flow
2. Configure the node:
   - Set a unique **Function Name** (e.g., "Air_Traffic_Control")
   - Choose an **Interpretation Profile** based on your domain
   - Enable **Advanced Analysis** for risk assessment
   - Enable **Resonance Detection** for stability monitoring

### Input Message Format

Send messages to the FRAM node with the following structure:

```javascript
{
    "framAspect": "input",           // Required: FRAM aspect type
    "payload": {                     // Required: Aspect data
        "temperature": 85.2,
        "pressure": 3.5,
        "flow_rate": 245.8
    },
    "metadata": {                    // Optional: Additional context
        "sensor_id": "T1",
        "location": "Reactor_Core",
        "timestamp": "2024-01-15T10:30:00Z"
    },
    "topic": "sensor_data"           // Optional: Message topic
}
```

### FRAM Aspects

The node accepts six types of FRAM aspects:

- **input**: Data, information, or materials entering the function
- **preconditions**: Conditions that must be satisfied for the function to be performed
- **resources**: What is needed to perform the function (people, systems, equipment)
- **time**: Temporal constraints and timing requirements
- **control**: How the function is monitored and controlled
- **output**: Results, products, or outcomes of the function

### Output Message Structure

```javascript
{
    "payload": {
        "functionName": "Air_Traffic_Control",
        "interpretationProfile": "human",
        "aspects": {
            "input": { /* collected input data */ },
            "preconditions": { /* collected precondition data */ },
            "resources": { /* collected resource data */ },
            "time": { /* collected time data */ },
            "control": { /* collected control data */ },
            "output": { /* collected output data */ }
        },
        "performance": {
            "timing": "on-time",
            "precision": "precise", 
            "speed": "adequate"
        },
        "advancedAnalysis": {           // If enabled
            "completeness": 100,
            "riskAssessment": {
                "overallRisk": "low",
                "riskFactors": [],
                "riskScore": 0
            },
            "recommendations": [
                "Continue monitoring system performance"
            ]
        },
        "resonance": {                  // If enabled
            "detected": false,
            "intensity": 0.3,
            "pattern": "stable"
        },
        "timestamp": "2024-01-15T10:30:00.123Z"
    },
    "topic": "fram_analysis"
}
```

## Example Flows

### Basic FRAM Analysis

```json
[
    {
        "id": "inject-input",
        "type": "inject",
        "name": "Sensor Data",
        "props": [
            {
                "p": "payload",
                "v": "{\"temperature\":85.2,\"pressure\":3.5}",
                "vt": "json"
            },
            {
                "p": "framAspect",
                "v": "input",
                "vt": "str"
            }
        ],
        "wires": [["fram-node"]]
    },
    {
        "id": "fram-node",
        "type": "fram",
        "name": "Industrial Control",
        "functionName": "Process_Control",
        "interpretationProfile": "technological",
        "enableAdvancedAnalysis": true,
        "wires": [["debug-output"]]
    },
    {
        "id": "debug-output",
        "type": "debug",
        "name": "FRAM Output"
    }
]
```

### Human Factors Analysis (ATC)

```json
[
    {
        "id": "workload-input",
        "type": "inject",
        "name": "Mental Workload",
        "props": [
            {
                "p": "payload",
                "v": "{\"mental_workload\":95,\"attention_capacity\":60}",
                "vt": "json"
            },
            {
                "p": "framAspect",
                "v": "resources",
                "vt": "str"
            }
        ],
        "wires": [["fram-atc"]]
    },
    {
        "id": "fram-atc",
        "type": "fram",
        "name": "ATC System",
        "functionName": "Air_Traffic_Control",
        "interpretationProfile": "human",
        "enableAdvancedAnalysis": true,
        "enableResonanceDetection": true,
        "resonanceThreshold": 0.7,
        "wires": [["monitor-fatigue"]]
    }
]
```

## Interpretation Profiles

### Human Factors Profile
- Emphasizes cognitive load, fatigue, and decision-making
- Monitors attention capacity, workload, stress levels
- Suitable for: Air Traffic Control, Healthcare, Emergency Response

### Organizational Profile  
- Focuses on governance, policies, compliance
- Tracks approval processes, authority delegation, regulatory compliance
- Suitable for: Corporate governance, Financial systems, Regulatory compliance

### Technological Profile
- Emphasizes precision, timing, system reliability
- Monitors performance metrics, resource utilization, system health
- Suitable for: Industrial control, Automation systems, Critical infrastructure

### General Profile
- Balanced analysis suitable for most applications
- Standard FRAM methodology without specialized interpretation
- Suitable for: General system analysis, Research, Educational purposes

## Advanced Features

### Risk Assessment
When advanced analysis is enabled, the node provides:
- Overall risk level (low/medium/high)
- Identified risk factors
- Risk scoring based on aspect values
- Automated recommendations

### Resonance Detection
Monitors for functional resonance patterns:
- Tracks variability across aspects over time
- Detects increasing instability patterns
- Configurable sensitivity threshold
- Provides resonance intensity and history

### Metadata Handling
- Rich metadata support for complex systems
- Hierarchical grouping capabilities
- Custom metadata mapping (future enhancement)
- Temporal metadata tracking

## Configuration Options

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Function Name | string | "FRAM_Function" | Unique identifier for the function |
| Interpretation Profile | enum | "general" | Analysis approach (general/human/organizational/technological) |
| Enable Advanced Analysis | boolean | false | Provides risk assessment and recommendations |
| Enable Resonance Detection | boolean | false | Monitors for functional resonance patterns |
| Resonance Threshold | number | 0.7 | Sensitivity threshold for resonance detection (0.0-1.0) |
| Hierarchical Grouping | boolean | false | Enable hierarchical organization of functions |

## API Reference

### Input Properties
- `msg.framAspect` (string, required): FRAM aspect type
- `msg.payload` (object, required): Aspect data
- `msg.metadata` (object, optional): Additional context
- `msg.topic` (string, optional): Message topic

### Output Properties
- `msg.payload.functionName`: Function identifier
- `msg.payload.interpretationProfile`: Analysis profile used
- `msg.payload.aspects`: Complete aspect data collection
- `msg.payload.performance`: Performance metrics
- `msg.payload.advancedAnalysis`: Risk assessment (if enabled)
- `msg.payload.resonance`: Resonance detection (if enabled)
- `msg.payload.timestamp`: Analysis timestamp

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache-2.0

## References

- [Functional Resonance Analysis Method](https://functionalresonance.com)
- [Resilience Engineering](https://www.resilience-engineering.org)
- [Erik Hollnagel's FRAM Guide](https://functionalresonance.com/frame-guides/)