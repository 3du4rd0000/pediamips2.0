const medicamentos = {
    paracetamol: {
      nombre: "Paracetamol",
      dosis: 15, // mg/kg/dosis
      maximo: 60, // mg/kg/día
      frecuencia: "Cada 6 horas",
      vias: {
        vo: {
          presentaciones: [
            { tipo: "Jarabe", nombre: "100 mg/ml", concentracion: 100 },
            { tipo: "Tableta", nombre: "500 mg", concentracion: 500 }
          ]
        },
        iv: {
          presentaciones: [
            { tipo: "Ampolla", nombre: "150 mg/2 ml", concentracion: 75 }
          ]
        }
      },
      ficha: {
        uso: "Fiebre y dolor leve a moderado.",
        mecanismo: "Inhibe síntesis de prostaglandinas en el SNC.",
        familia: "Analgésico/Antipirético",
        contraindicaciones: "Hepatopatía grave, sobredosis previa."
      }
    },
  
    ibuprofeno: {
      nombre: "Ibuprofeno",
      dosis: 10,
      maximo: 40,
      frecuencia: "Cada 6-8 horas",
      vias: {
        vo: {
          presentaciones: [
            { tipo: "Suspensión", nombre: "100 mg/5 ml", concentracion: 20 },
            { tipo: "Tableta", nombre: "400 mg", concentracion: 400 }
          ]
        }
      },
      ficha: {
        uso: "Dolor, fiebre, inflamación.",
        mecanismo: "Inhibe COX-1 y COX-2.",
        familia: "AINE",
        contraindicaciones: "Úlcera activa, enfermedad renal aguda."
      }
    },

        "Amoxicilina": {
          nombre: "Amoxicilina",
          vias: {
            "VO": [
              {
                presentacion: "Suspensión 250 mg/5 ml",
                concentracion: 250,
                unidad: "mg",
                volumen: 5
              },
              {
                presentacion: "Tabletas 500 mg",
                concentracion: 500,
                unidad: "mg",
                volumen: 1
              }
            ]
          },
          dosis: 50, // mg/kg/día
          frecuencia: "cada 8 horas",
          ficha: {
            mecanismo: "Inhibe la síntesis de la pared celular bacteriana.",
            familia: "Penicilina de amplio espectro",
            uso: "Otitis media, faringoamigdalitis, infecciones respiratorias, ITUs.",
            contraindicaciones: "Hipersensibilidad a penicilinas",
            efectosAdversos: "Erupción cutánea, diarrea, náusea."
          }
        },
      
        "Amoxicilina/Ácido Clavulánico": {
          nombre: "Amoxicilina/Ácido Clavulánico",
          vias: {
            "VO": [
              {
                presentacion: "Suspensión 400 mg/57 mg por 5 ml",
                concentracion: 400,
                unidad: "mg",
                volumen: 5
              },
              {
                presentacion: "Tabletas 875 mg/125 mg",
                concentracion: 875,
                unidad: "mg",
                volumen: 1
              }
            ]
          },
          dosis: 45, // mg/kg/día de amoxicilina
          frecuencia: "cada 12 horas",
          ficha: {
            mecanismo: "Amoxicilina: inhibidor de síntesis de pared. Clavulánico: inhibidor de β-lactamasas.",
            familia: "Penicilina con inhibidor de β-lactamasa",
            uso: "Infecciones resistentes, sinusitis, bronquitis, ITUs.",
            contraindicaciones: "Insuficiencia hepática grave, alergia a penicilinas.",
            efectosAdversos: "Diarrea, náuseas, urticaria, colitis."
          }
        },
      
        "Cefalexina": {
          nombre: "Cefalexina",
          vias: {
            "VO": [
              {
                presentacion: "Suspensión 250 mg/5 ml",
                concentracion: 250,
                unidad: "mg",
                volumen: 5
              },
              {
                presentacion: "Tabletas 500 mg",
                concentracion: 500,
                unidad: "mg",
                volumen: 1
              }
            ]
          },
          dosis: 50, // mg/kg/día
          frecuencia: "cada 6 a 12 horas",
          ficha: {
            mecanismo: "Inhibe síntesis de la pared celular bacteriana.",
            familia: "Cefalosporina de primera generación",
            uso: "Faringitis, infecciones de piel y vías urinarias.",
            contraindicaciones: "Alergia a cefalosporinas.",
            efectosAdversos: "Molestias GI, urticaria, superinfecciones."
          }
        },
      
        "Ceftriaxona": {
          nombre: "Ceftriaxona",
          vias: {
            "IV": [
              {
                presentacion: "Vial 1 g polvo para inyección",
                concentracion: 1000,
                unidad: "mg",
                volumen: 1
              }
            ]
          },
          dosis: 50, // mg/kg/dosis
          frecuencia: "cada 24 horas",
          ficha: {
            mecanismo: "Inhibe síntesis de la pared bacteriana.",
            familia: "Cefalosporina de tercera generación",
            uso: "Neumonía grave, meningitis, sepsis, ITU complicada.",
            contraindicaciones: "Ictericia neonatal, alergia a cefalosporinas.",
            efectosAdversos: "Dolor en sitio de inyección, eosinofilia, litiasis biliar."
          }
        },

        "Salbutamol": {
            nombre: "Salbutamol",
            vias: {
              "Inhalación": [
                {
                  presentacion: "Nebulización 0.5% (5 mg/ml)",
                  concentracion: 5000,
                  unidad: "mcg",
                  volumen: 1
                },
                {
                  presentacion: "Inhalador 100 mcg/dosis",
                  concentracion: 100,
                  unidad: "mcg",
                  volumen: 1
                }
              ]
            },
            dosis: 100, // mcg/dosis (para inhalador) o 0.15 mg/kg/dosis (nebulización)
            frecuencia: "cada 6 a 8 horas",
            ficha: {
              mecanismo: "Agonista β2 adrenérgico: broncodilatador.",
              familia: "Broncodilatador de acción corta",
              uso: "Asma, broncoespasmo, bronquitis obstructiva.",
              contraindicaciones: "Taquiarritmias, hipersensibilidad.",
              efectosAdversos: "Temblor, taquicardia, nerviosismo, cefalea."
            }
          },
          
          "Bromuro de Ipratropio": {
            nombre: "Bromuro de Ipratropio",
            vias: {
              "Inhalación": [
                {
                  presentacion: "Solución 250 mcg/ml",
                  concentracion: 250,
                  unidad: "mcg",
                  volumen: 1
                }
              ]
            },
            dosis: 250, // mcg por dosis estándar
            frecuencia: "cada 6-8 horas",
            ficha: {
              mecanismo: "Antagonista muscarínico M3: inhibe broncoconstricción.",
              familia: "Anticolinérgico inhalado",
              uso: "Asma moderada/grave, crisis obstructiva, bronquiolitis.",
              contraindicaciones: "Glaucoma, hipertrofia prostática.",
              efectosAdversos: "Boca seca, tos, irritación faríngea."
            }
          },
          
          "Loratadina": {
            nombre: "Loratadina",
            vias: {
              "VO": [
                {
                  presentacion: "Jarabe 1 mg/ml",
                  concentracion: 1,
                  unidad: "mg",
                  volumen: 1
                },
                {
                  presentacion: "Tableta 10 mg",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.2, // mg/kg/día
            frecuencia: "cada 24 horas",
            ficha: {
              mecanismo: "Antagonista selectivo de receptores H1 periféricos.",
              familia: "Antihistamínico no sedante",
              uso: "Rinitis alérgica, urticaria.",
              contraindicaciones: "Insuficiencia hepática grave, <2 años.",
              efectosAdversos: "Cefalea, fatiga, somnolencia leve."
            }
          },
          
          "Cetirizina": {
            nombre: "Cetirizina",
            vias: {
              "VO": [
                {
                  presentacion: "Solución 1 mg/ml",
                  concentracion: 1,
                  unidad: "mg",
                  volumen: 1
                },
                {
                  presentacion: "Tableta 10 mg",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.25, // mg/kg/día
            frecuencia: "cada 24 horas",
            ficha: {
              mecanismo: "Antagonista potente y selectivo de receptores H1.",
              familia: "Antihistamínico de segunda generación",
              uso: "Rinitis, conjuntivitis, urticaria.",
              contraindicaciones: "Niños <6 meses, IR grave.",
              efectosAdversos: "Somnolencia, sequedad bucal, mareo."
            }
          },
          
          "Aciclovir": {
            nombre: "Aciclovir",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 200 mg/5 ml",
                  concentracion: 200,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 400 mg",
                  concentracion: 400,
                  unidad: "mg",
                  volumen: 1
                }
              ],
              "IV": [
                {
                  presentacion: "Vial 250 mg para reconstituir",
                  concentracion: 250,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 20, // mg/kg cada 8 h VO
            frecuencia: "cada 8 horas por 5 días",
            ficha: {
              mecanismo: "Análogo de nucleósido que inhibe la replicación del ADN viral.",
              familia: "Antiviral antiherpético",
              uso: "Herpes simple, varicela, zóster neonatal o inmunosuprimido.",
              contraindicaciones: "Hipersensibilidad, insuficiencia renal sin ajuste.",
              efectosAdversos: "Cristaluria, náuseas, cefalea, flebitis (IV)."
            }
          },
          
          "Oseltamivir": {
            nombre: "Oseltamivir",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 12 mg/ml",
                  concentracion: 12,
                  unidad: "mg",
                  volumen: 1
                },
                {
                  presentacion: "Cápsulas 75 mg",
                  concentracion: 75,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 3, // mg/kg cada 12 h en <1 año
            frecuencia: "cada 12 horas por 5 días",
            ficha: {
              mecanismo: "Inhibidor de la neuraminidasa, bloquea liberación viral.",
              familia: "Antiviral antiinfluenza",
              uso: "Influenza A y B sintomática, prevención postexposición.",
              contraindicaciones: "Hipersensibilidad.",
              efectosAdversos: "Náuseas, vómito, dolor abdominal, insomnio."
            }
          },
          
          "Zanamivir": {
            nombre: "Zanamivir",
            vias: {
              "Inhalación": [
                {
                  presentacion: "Dispositivo Diskhaler 5 mg/dosis",
                  concentracion: 5,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 10, // mg cada 12 h
            frecuencia: "cada 12 horas por 5 días",
            ficha: {
              mecanismo: "Inhibidor de la neuraminidasa, evita diseminación viral.",
              familia: "Antiviral antiinfluenza",
              uso: "Influenza A y B en mayores de 7 años.",
              contraindicaciones: "Asma, EPOC, hipersensibilidad.",
              efectosAdversos: "Broncoespasmo, cefalea, tos."
            }
          },
          
          "Palivizumab": {
            nombre: "Palivizumab",
            vias: {
              "IM": [
                {
                  presentacion: "Solución 100 mg/ml",
                  concentracion: 100,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 15, // mg/kg IM mensual
            frecuencia: "una vez al mes durante temporada de VSR",
            ficha: {
              mecanismo: "Anticuerpo monoclonal contra proteína F del VSR.",
              familia: "Inmunoprofilaxis antiviral",
              uso: "Prevención en prematuros, cardiopatías congénitas.",
              contraindicaciones: "Alergia a proteínas murinas.",
              efectosAdversos: "Fiebre, erupción, dolor en sitio de aplicación."
            }
          },
          
          "Valaciclovir": {
            nombre: "Valaciclovir",
            vias: {
              "VO": [
                {
                  presentacion: "Tabletas 500 mg",
                  concentracion: 500,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 20, // mg/kg cada 8 h
            frecuencia: "cada 8 horas por 5–10 días",
            ficha: {
              mecanismo: "Profármaco de aciclovir, inhibe síntesis de ADN viral.",
              familia: "Antiviral antiherpético",
              uso: "Herpes simple, herpes zóster en niños > 2 años.",
              contraindicaciones: "IR grave, hipersensibilidad.",
              efectosAdversos: "Dolor abdominal, cefalea, náuseas."
            }
          },
          
          "Valganciclovir": {
            nombre: "Valganciclovir",
            vias: {
              "VO": [
                {
                  presentacion: "Tabletas 450 mg",
                  concentracion: 450,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 16, // mg/kg cada 12 h
            frecuencia: "cada 12 horas por varias semanas",
            ficha: {
              mecanismo: "Profármaco de ganciclovir; inhibe replicación de CMV.",
              familia: "Antiviral anti-CMV",
              uso: "CMV congénito sintomático, inmunosupresión postrasplante.",
              contraindicaciones: "Neutropenia, trombocitopenia.",
              efectosAdversos: "Mielosupresión, hepatotoxicidad, teratogenicidad."
            }
          },
          
          "Ganciclovir": {
            nombre: "Ganciclovir",
            vias: {
              "IV": [
                {
                  presentacion: "Vial 500 mg para reconstituir",
                  concentracion: 500,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 5, // mg/kg cada 12 h
            frecuencia: "cada 12 horas IV",
            ficha: {
              mecanismo: "Inhibe replicación de ADN viral (CMV, HSV).",
              familia: "Antiviral antiherpético",
              uso: "Infecciones graves por CMV o herpes en inmunodeprimidos.",
              contraindicaciones: "IR, alteración hematológica severa.",
              efectosAdversos: "Mielosupresión, convulsiones, flebitis."
            }
          },
          
          "Azitromicina": {
            nombre: "Azitromicina",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 200 mg/5 ml",
                  concentracion: 200,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 250 mg",
                  concentracion: 250,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 10, // mg/kg/día VO
            frecuencia: "cada 24 horas por 3 a 5 días",
            ficha: {
              mecanismo: "Inhibe síntesis proteica 50s ribosomal.",
              familia: "Macrólido",
              uso: "Faringoamigdalitis, otitis, neumonía atípica, diarrea por Campylobacter.",
              contraindicaciones: "Hepatopatía grave.",
              efectosAdversos: "Diarrea, náusea, prolongación QT."
            }
          },
          
          "Claritromicina": {
            nombre: "Claritromicina",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 250 mg/5 ml",
                  concentracion: 250,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 250 mg",
                  concentracion: 250,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 15, // mg/kg/día VO
            frecuencia: "cada 12 horas por 5 a 10 días",
            ficha: {
              mecanismo: "Inhibe síntesis proteica 50s ribosomal.",
              familia: "Macrólido",
              uso: "Otitis media, faringitis, infecciones por Mycoplasma.",
              contraindicaciones: "QT largo, hepatopatía.",
              efectosAdversos: "Sabor metálico, náuseas, hepatitis colestásica."
            }
          },
          
          "Clindamicina": {
            nombre: "Clindamicina",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 75 mg/5 ml",
                  concentracion: 75,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Cápsulas 300 mg",
                  concentracion: 300,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 10, // mg/kg/dosis VO
            frecuencia: "cada 8 horas por 7–10 días",
            ficha: {
              mecanismo: "Inhibe síntesis proteica subunidad 50s.",
              familia: "Lincosamida",
              uso: "Infecciones por anaerobios, celulitis, abscesos.",
              contraindicaciones: "Colitis pseudomembranosa previa.",
              efectosAdversos: "Diarrea, colitis por C. difficile."
            }
          },
          
          "Trimetoprim-Sulfametoxazol": {
            nombre: "Trimetoprim-Sulfametoxazol",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 40/200 mg por 5 ml",
                  concentracion: 40, // se basa en trimetoprim
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 80/400 mg",
                  concentracion: 80,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 6, // mg/kg/dosis de trimetoprim
            frecuencia: "cada 12 horas",
            ficha: {
              mecanismo: "Inhibe síntesis de folato en bacterias.",
              familia: "Sulfonamida",
              uso: "ITU, otitis, infecciones cutáneas, Pneumocystis jirovecii.",
              contraindicaciones: "Alergia a sulfas, <2 meses.",
              efectosAdversos: "Erupciones, hiperkalemia, náuseas."
            }
          },
          
          "Nitrofurantoína": {
            nombre: "Nitrofurantoína",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 25 mg/5 ml",
                  concentracion: 25,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Cápsulas 100 mg",
                  concentracion: 100,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 5, // mg/kg/día
            frecuencia: "cada 6 o 8 horas por 5 a 7 días",
            ficha: {
              mecanismo: "Daño al ADN bacteriano.",
              familia: "Nitrofuranos",
              uso: "ITU no complicada, profilaxis ITU recurrente.",
              contraindicaciones: "<1 mes de edad, insuficiencia renal.",
              efectosAdversos: "Orina color marrón, náuseas, fibrosis pulmonar (prolongado)."
            }
          },

          "Ondansetrón": {
            nombre: "Ondansetrón",
            vias: {
              "VO": [
                {
                  presentacion: "Solución 4 mg/5 ml",
                  concentracion: 4,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 4 mg",
                  concentracion: 4,
                  unidad: "mg",
                  volumen: 1
                }
              ],
              "IV": [
                {
                  presentacion: "Ampolla 2 mg/ml",
                  concentracion: 2,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.15, // mg/kg
            frecuencia: "cada 8 horas",
            ficha: {
              mecanismo: "Antagonista selectivo del receptor serotoninérgico 5-HT3.",
              familia: "Antiemético",
              uso: "Náusea y vómito por gastroenteritis, postoperatorio, quimioterapia.",
              contraindicaciones: "Síndrome de QT largo, hipersensibilidad.",
              efectosAdversos: "Cefalea, estreñimiento, prolongación del QT."
            }
          },
          
          "Metoclopramida": {
            nombre: "Metoclopramida",
            vias: {
              "VO": [
                {
                  presentacion: "Solución 5 mg/5 ml",
                  concentracion: 5,
                  unidad: "mg",
                  volumen: 5
                },
                {
                  presentacion: "Tabletas 10 mg",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                }
              ],
              "IV": [
                {
                  presentacion: "Ampolla 10 mg/2 ml",
                  concentracion: 5,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.1, // mg/kg
            frecuencia: "cada 8 horas",
            ficha: {
              mecanismo: "Antagonista dopaminérgico D2, procinético.",
              familia: "Antiemético / Procinético",
              uso: "Vómito, gastroparesia, reflujo, náusea postoperatoria.",
              contraindicaciones: "Epilepsia, obstrucción GI, discinesia.",
              efectosAdversos: "Somnolencia, distonías, diarrea."
            }
          },
          
          "Domperidona": {
            nombre: "Domperidona",
            vias: {
              "VO": [
                {
                  presentacion: "Suspensión 1 mg/ml",
                  concentracion: 1,
                  unidad: "mg",
                  volumen: 1
                },
                {
                  presentacion: "Tabletas 10 mg",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.25, // mg/kg
            frecuencia: "cada 8 horas antes de alimentos",
            ficha: {
              mecanismo: "Antagonista dopaminérgico periférico (procinético).",
              familia: "Procinético",
              uso: "Reflujo gastroesofágico, vómito, distensión abdominal.",
              contraindicaciones: "QT largo, cardiopatías, uso con macrólidos.",
              efectosAdversos: "Galactorrea, prolongación QT, cefalea."
            }
          },
          
          "Omeprazol": {
            nombre: "Omeprazol",
            vias: {
              "VO": [
                {
                  presentacion: "Cápsulas 10 mg",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                },
                {
                  presentacion: "Suspensión 2 mg/ml (compuesta)",
                  concentracion: 2,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 1, // mg/kg/día
            frecuencia: "cada 24 horas (administrar en ayunas)",
            ficha: {
              mecanismo: "Inhibidor de la bomba de protones (IBP).",
              familia: "Antisecretor gástrico",
              uso: "ERGE, gastritis, esofagitis erosiva, úlcera péptica.",
              contraindicaciones: "Hipersensibilidad.",
              efectosAdversos: "Dolor abdominal, cefalea, diarrea."
            }
          },

          "Racecadotrilo": {
            nombre: "Racecadotrilo",
            vias: {
              "VO": [
                {
                  presentacion: "Granulado 30 mg/sobre",
                  concentracion: 30,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 1.5, // mg/kg/dosis
            frecuencia: "cada 8 horas por 3 días o hasta mejoría",
            ficha: {
              mecanismo: "Inhibidor de la encefalinasa; reduce la secreción intestinal.",
              familia: "Antisecretor intestinal",
              uso: "Diarrea aguda no invasiva en mayores de 3 meses.",
              contraindicaciones: "Diarrea con sangre o fiebre alta.",
              efectosAdversos: "Erupción, vómito, dolor abdominal leve."
            }
          },
          
          "Lactulosa": {
            nombre: "Lactulosa",
            vias: {
              "VO": [
                {
                  presentacion: "Solución 667 mg/ml",
                  concentracion: 667,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 1, // ml/kg/día dividido en 2 dosis
            frecuencia: "cada 12 horas",
            ficha: {
              mecanismo: "Disacárido no absorbible, osmótico, estimula motilidad intestinal.",
              familia: "Laxante osmótico",
              uso: "Estreñimiento funcional, encefalopatía hepática.",
              contraindicaciones: "Obstrucción intestinal, galactosemia.",
              efectosAdversos: "Flatulencia, diarrea, distensión."
            }
          },
          
          "Polietilenglicol": {
            nombre: "Polietilenglicol",
            vias: {
              "VO": [
                {
                  presentacion: "Polvo 17 g por sobre (para disolver)",
                  concentracion: 17000,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.8, // g/kg/día
            frecuencia: "1 vez al día (ajustar según respuesta)",
            ficha: {
              mecanismo: "Laxante osmótico que retiene agua en el intestino.",
              familia: "Laxante osmótico",
              uso: "Estreñimiento funcional crónico, preparación colonoscopia.",
              contraindicaciones: "Obstrucción intestinal.",
              efectosAdversos: "Distensión, flatulencia, diarrea."
            }
          },
          
          "Simeticona": {
            nombre: "Simeticona",
            vias: {
              "VO": [
                {
                  presentacion: "Gotas 40 mg/ml",
                  concentracion: 40,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.5, // mg/kg/dosis
            frecuencia: "cada 8 horas después de alimentos",
            ficha: {
              mecanismo: "Reduce la tensión superficial de las burbujas de gas.",
              familia: "Antiflatulento",
              uso: "Cólicos, meteorismo, distensión abdominal.",
              contraindicaciones: "Obstrucción intestinal.",
              efectosAdversos: "Muy rara vez náuseas o reacciones alérgicas leves."
            }
          },
          
          "Famotidina": {
            nombre: "Famotidina",
            vias: {
              "VO": [
                {
                  presentacion: "Tabletas 20 mg",
                  concentracion: 20,
                  unidad: "mg",
                  volumen: 1
                }
              ],
              "IV": [
                {
                  presentacion: "Ampolla 10 mg/ml",
                  concentracion: 10,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 0.5, // mg/kg/dosis
            frecuencia: "cada 12 horas",
            ficha: {
              mecanismo: "Antagonista selectivo de receptores H2.",
              familia: "Antisecretor gástrico",
              uso: "ERGE, úlceras, gastritis (alternativa a ranitidina).",
              contraindicaciones: "IR grave (ajustar).",
              efectosAdversos: "Cefalea, diarrea, alteraciones transitorias hepáticas."
            }
          },
          
          "Diosmectita": {
            nombre: "Diosmectita",
            vias: {
              "VO": [
                {
                  presentacion: "Polvo 3 g/sobre",
                  concentracion: 3000,
                  unidad: "mg",
                  volumen: 1
                }
              ]
            },
            dosis: 1, // sobre/8–12 h según edad
            frecuencia: "cada 8 horas",
            ficha: {
              mecanismo: "Silicato natural que actúa como protector y adsorbente intestinal.",
              familia: "Antidiarreico",
              uso: "Diarrea acuosa no infecciosa, dolor abdominal leve.",
              contraindicaciones: "Estreñimiento severo, hipersensibilidad.",
              efectosAdversos: "Estreñimiento leve, náuseas raras."
            }
          },  
      };
      


  
  const contenedor = document.getElementById("lista-farmacos");

  Object.entries(medicamentos).forEach(([clave, datos]) => {
    const bloque = document.createElement("div");
    bloque.className = "bg-white rounded-xl shadow p-6";
  
    // Vías disponibles
    const vias = Object.keys(datos.vias)
      .map(v => `<option value="${v}">${v.toUpperCase()}</option>`)
      .join("");
  
    bloque.innerHTML = `
      <h2 class="text-xl font-bold text-blue-700 mb-2">${datos.nombre}</h2>
      <label class="block mb-1 text-sm text-gray-700">Peso (kg):</label>
      <input type="number" min="0" step="0.1" class="peso w-full mb-2 p-2 border rounded" />
  
      <label class="block mb-1 text-sm text-gray-700">Vía:</label>
      <select class="via w-full mb-2 p-2 border rounded">
        <option disabled selected>Selecciona vía</option>
        ${vias}
      </select>
  
      <label class="block mb-1 text-sm text-gray-700">Presentación:</label>
      <select class="presentacion w-full mb-4 p-2 border rounded" disabled></select>
  
      <button class="calcular bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calcular</button>
      <div class="resultado mt-4 text-sm text-blue-900 font-medium hidden"></div>
  
      <button class="toggle-details text-blue-600 mt-4 hover:underline">Ver más</button>
      <div class="ficha mt-2 hidden text-sm text-gray-700 space-y-1">
        <p><strong>Uso:</strong> ${datos.ficha.uso}</p>
        <p><strong>Familia:</strong> ${datos.ficha.familia}</p>
        <p><strong>Mecanismo:</strong> ${datos.ficha.mecanismo}</p>
        <p><strong>Contraindicaciones:</strong> ${datos.ficha.contraindicaciones}</p>
        <p><strong>Dosis estándar:</strong> ${datos.dosis} mg/kg/dosis</p>
        <p><strong>Dosis máxima:</strong> ${datos.maximo} mg/kg/día</p>
      </div>
    `;
  
    contenedor.appendChild(bloque);
  
    // Referencias
    const pesoInput = bloque.querySelector(".peso");
    const viaSelect = bloque.querySelector(".via");
    const presentacionSelect = bloque.querySelector(".presentacion");
    const calcularBtn = bloque.querySelector(".calcular");
    const resultadoDiv = bloque.querySelector(".resultado");
    const toggleBtn = bloque.querySelector(".toggle-details");
    const fichaDiv = bloque.querySelector(".ficha");
  
    // Llenar presentaciones según vía
    viaSelect.addEventListener("change", () => {
      const seleccionadas = datos.vias[viaSelect.value].presentaciones;
      presentacionSelect.innerHTML = seleccionadas
        .map(p => `<option value="${p.concentracion}" data-info="${p.nombre}">${p.tipo} — ${p.nombre}</option>`)
        .join("");
      presentacionSelect.disabled = false;
    });
  
    // Mostrar ficha técnica
    toggleBtn.addEventListener("click", () => {
      fichaDiv.classList.toggle("hidden");
      toggleBtn.textContent = fichaDiv.classList.contains("hidden") ? "Ver más" : "Ver menos";
    });
  
    // Calcular dosis
    calcularBtn.addEventListener("click", () => {
      const peso = parseFloat(pesoInput.value);
      const dosis = datos.dosis;
      const conc = parseFloat(presentacionSelect.value);
      const nombrePres = presentacionSelect.selectedOptions[0]?.dataset.info;
  
      if (isNaN(peso) || isNaN(conc)) return;
  
      const mg = peso * dosis;
      const ml = (conc && conc > 0) ? (mg / conc).toFixed(2) : null;
  
      resultadoDiv.innerHTML = `
        Receta sugerida:<br>
        <strong>${datos.nombre}</strong> vía ${viaSelect.value.toUpperCase()}<br>
        ${mg.toFixed(1)} mg (${ml ? ml + " ml" : "tableta"})<br>
        ${datos.frecuencia}
      `;
      resultadoDiv.classList.remove("hidden");
    });
  });
  


  // BUSCADOR
document.getElementById("buscadorFarmacos").addEventListener("input", function () {
    const filtro = this.value.toLowerCase();
    const bloques = document.querySelectorAll("#lista-farmacos > div");
  
    bloques.forEach(bloque => {
      const titulo = bloque.querySelector("h2").textContent.toLowerCase();
      bloque.style.display = titulo.startsWith(filtro) ? "block" : "none";
    });
  });
  