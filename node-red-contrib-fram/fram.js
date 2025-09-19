module.exports = function(RED) {
    "use strict";

    function FRAMNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        // Configuration from the node editor
        node.functionName = config.functionName || "FRAM_Function";
        node.interpretationProfile = config.interpretationProfile || "general";
        node.aspectsConfig = config.aspectsConfig || {};
        node.enableAdvancedAnalysis = config.enableAdvancedAnalysis || false;
        node.enableResonanceDetection = config.enableResonanceDetection || false;
        node.resonanceThreshold = parseFloat(config.resonanceThreshold) || 0.7;
        node.metadataMapping = config.metadataMapping || {};
        node.hierarchicalGrouping = config.hierarchicalGrouping || false;

        // Initialize FRAM aspects storage
        var aspects = {
            input: null,
            preconditions: null,
            resources: null,
            time: null,
            control: null,
            output: null
        };

        // Performance tracking
        var performanceMetrics = {
            timing: "on-time",
            precision: "precise",
            speed: "adequate"
        };

        // Resonance detection state
        var resonanceHistory = [];
        var maxHistoryLength = 10;

        node.on('input', function(msg) {
            try {
                // Store aspect data based on framAspect property
                if (msg.framAspect && aspects.hasOwnProperty(msg.framAspect)) {
                    aspects[msg.framAspect] = msg.payload;
                    
                    // Process metadata if present
                    if (msg.metadata) {
                        processMetadata(msg.metadata);
                    }
                    
                    // Set node status
                    updateNodeStatus();
                    
                    // Analyze current state
                    var analysis = performAnalysis();
                    
                    // Create output message
                    var outputMsg = {
                        payload: {
                            functionName: node.functionName,
                            interpretationProfile: node.interpretationProfile,
                            aspects: JSON.parse(JSON.stringify(aspects)),
                            performance: performanceMetrics,
                            timestamp: new Date().toISOString()
                        },
                        topic: msg.topic || "fram_analysis"
                    };

                    // Add advanced analysis if enabled
                    if (node.enableAdvancedAnalysis && analysis) {
                        outputMsg.payload.advancedAnalysis = analysis;
                    }

                    // Add resonance detection if enabled
                    if (node.enableResonanceDetection) {
                        var resonance = detectResonance();
                        if (resonance) {
                            outputMsg.payload.resonance = resonance;
                        }
                    }

                    // Send output
                    node.send(outputMsg);
                    
                } else {
                    // Pass through messages without framAspect
                    node.send(msg);
                }
                
            } catch (err) {
                node.error("FRAM Analysis Error: " + err.message, msg);
            }
        });

        function processMetadata(metadata) {
            // Apply metadata mapping if configured
            if (node.metadataMapping && Object.keys(node.metadataMapping).length > 0) {
                // Process metadata according to mapping rules
                // This could include data transformation, validation, etc.
            }
        }

        function updateNodeStatus() {
            var filledAspects = Object.keys(aspects).filter(key => aspects[key] !== null).length;
            var totalAspects = Object.keys(aspects).length;
            
            if (filledAspects === 0) {
                node.status({fill: "grey", shape: "ring", text: "waiting for data"});
            } else if (filledAspects < totalAspects) {
                node.status({fill: "yellow", shape: "dot", text: `${filledAspects}/${totalAspects} aspects`});
            } else {
                node.status({fill: "green", shape: "dot", text: "complete analysis"});
            }
        }

        function performAnalysis() {
            if (!node.enableAdvancedAnalysis) return null;

            var analysis = {
                completeness: calculateCompleteness(),
                riskAssessment: performRiskAssessment(),
                recommendations: generateRecommendations(),
                timestamp: new Date().toISOString()
            };

            return analysis;
        }

        function calculateCompleteness() {
            var filledAspects = Object.keys(aspects).filter(key => aspects[key] !== null).length;
            var totalAspects = Object.keys(aspects).length;
            return (filledAspects / totalAspects) * 100;
        }

        function performRiskAssessment() {
            var riskFactors = [];
            var overallRisk = "low";

            // Analyze each aspect for risk indicators
            if (aspects.input && typeof aspects.input === 'object') {
                // Check for input-related risks
                if (aspects.input.complexity_score > 8) {
                    riskFactors.push("High input complexity detected");
                    overallRisk = "high";
                }
            }

            if (aspects.resources && typeof aspects.resources === 'object') {
                // Check for resource constraints
                if (aspects.resources.availability < 50) {
                    riskFactors.push("Limited resource availability");
                    overallRisk = overallRisk === "high" ? "high" : "medium";
                }
            }

            if (aspects.time && typeof aspects.time === 'object') {
                // Check for timing issues
                if (aspects.time.pressure === "critical" || aspects.time.deadline_pressure === "critical") {
                    riskFactors.push("Critical timing pressure");
                    overallRisk = "high";
                }
            }

            return {
                overallRisk: overallRisk,
                riskFactors: riskFactors,
                riskScore: riskFactors.length
            };
        }

        function generateRecommendations() {
            var recommendations = [];

            // Generate recommendations based on current state
            var completeness = calculateCompleteness();
            if (completeness < 100) {
                recommendations.push("Complete missing FRAM aspects for full analysis");
            }

            var riskAssessment = performRiskAssessment();
            if (riskAssessment.overallRisk === "high") {
                recommendations.push("Implement risk mitigation strategies");
                recommendations.push("Monitor system state closely");
            }

            if (recommendations.length === 0) {
                recommendations.push("Continue monitoring system performance");
            }

            return recommendations;
        }

        function detectResonance() {
            if (!node.enableResonanceDetection) return null;

            // Simple resonance detection algorithm
            var variabilityScore = calculateVariabilityScore();
            
            // Add to history
            resonanceHistory.push({
                timestamp: Date.now(),
                variability: variabilityScore
            });

            // Maintain history length
            if (resonanceHistory.length > maxHistoryLength) {
                resonanceHistory.shift();
            }

            // Detect resonance patterns
            if (resonanceHistory.length >= 3) {
                var recentVariability = resonanceHistory.slice(-3).map(h => h.variability);
                var avgVariability = recentVariability.reduce((a, b) => a + b, 0) / recentVariability.length;
                
                if (avgVariability > node.resonanceThreshold) {
                    return {
                        detected: true,
                        intensity: avgVariability,
                        pattern: "increasing_variability",
                        history: resonanceHistory.slice(-5) // Last 5 measurements
                    };
                }
            }

            return {
                detected: false,
                intensity: variabilityScore,
                pattern: "stable",
                history: resonanceHistory.slice(-5)
            };
        }

        function calculateVariabilityScore() {
            var score = 0;
            var factors = 0;

            // Analyze variability in different aspects
            Object.keys(aspects).forEach(aspectKey => {
                if (aspects[aspectKey] && typeof aspects[aspectKey] === 'object') {
                    // Look for indicators of variability/stress
                    var aspect = aspects[aspectKey];
                    
                    if (aspect.hasOwnProperty('workload') && aspect.workload > 80) {
                        score += 0.3;
                        factors++;
                    }
                    
                    if (aspect.hasOwnProperty('complexity_score') && aspect.complexity_score > 7) {
                        score += 0.2;
                        factors++;
                    }
                    
                    if (aspect.hasOwnProperty('pressure') && (aspect.pressure === "high" || aspect.pressure === "critical")) {
                        score += 0.3;
                        factors++;
                    }
                    
                    if (aspect.hasOwnProperty('availability') && aspect.availability < 60) {
                        score += 0.2;
                        factors++;
                    }
                }
            });

            return factors > 0 ? Math.min(score, 1.0) : 0;
        }

        // Clean up on node removal
        node.on('close', function() {
            aspects = null;
            resonanceHistory = [];
        });
    }

    RED.nodes.registerType("fram", FRAMNode);
};