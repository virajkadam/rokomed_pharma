export const productsData = {
  "medicines": [
    {
      "id": "1",
      "name": "AMTRO-CL 625 Tab",
      "description": "Amoxycillin 500 mg + Clavulanic Acid 125 mg",
      "available_forms": {
        "strengths": ["500mg Amoxycillin + 125mg Clavulanic Acid"],
        "packaging": "Strip of 10 Tablets (Total: 60 Tablets)"
      },
      "prescription_required": true,
      "category": "antibiotics",
      "image_url": "/images/products/amtrocl625.png",
      "details": {
        "indications": ["Respiratory tract infections", "Urinary tract infections", "Skin infections"],
        "mechanism_of_action": [
          {"name": "Amoxycillin", "description": "Penicillin antibiotic that inhibits bacterial cell wall synthesis."},
          {"name": "Clavulanic Acid", "description": "Beta-lactamase inhibitor that prevents bacterial resistance."}
        ],
        "dosage": "Typically prescribed as one tablet every 8 or 12 hours, depending on severity.",
        "important_safety_information": "This medication requires a valid prescription from a licensed healthcare provider. Please consult your doctor before use.",
        "quality_standards": ["WHO-GMP Certified", "Quality Tested"],
        "storage_instructions": "Store in a cool, dry place below 30°C. Keep away from direct sunlight. Keep out of reach of children.",
        "manufacturer": "Rokomed Pharma, MIDC Ranjangaon, Pune - 412220"
      }
    },
    {
      "id": "2",
      "name": "Cefixime + Ofloxacin",
      "description": "Cefixime 200 mg + Ofloxacin 200 mg",
      "available_forms": {
        "strengths": ["200mg Cefixime + 200mg Ofloxacin"],
        "packaging": "Strip of 10 Tablets (Total: 100 Tablets)"
      },
      "prescription_required": true,
      "category": "antibiotics",
      "image_url": "/images/products/cefixime-ofloxacin.png",
      "details": {
        "indications": ["Gastrointestinal infections", "Respiratory tract infections", "Urinary tract infections"],
        "mechanism_of_action": [
          {"name": "Cefixime", "description": "A third-generation cephalosporin that inhibits bacterial cell wall synthesis."},
          {"name": "Ofloxacin", "description": "A fluoroquinolone that inhibits bacterial DNA gyrase."}
        ],
        "dosage": "Usually prescribed as one tablet once or twice daily, depending on infection type and severity.",
        "important_safety_information": "This medication requires a valid prescription from a licensed healthcare provider. Please consult your doctor before use.",
        "quality_standards": ["WHO-GMP Certified", "Quality Tested"],
        "storage_instructions": "Store in a cool, dry place below 30°C. Keep away from direct sunlight. Keep out of reach of children.",
        "manufacturer": "Rokomed Pharma, MIDC Ranjangaon, Pune - 412220"
      }
    },
    {
      "id": "3",
      "name": "Hb-PRIME Gold Syp",
      "description": "Multivitamins, Protein, Iron, Calcium",
      "available_forms": {
        "strengths": ["300ml Syrup"],
        "packaging": "Bottle of 300ml"
      },
      "prescription_required": false,
      "category": "immunity",
      "image_url": "/images/products/hbprimegold.png",
      "details": {
        "indications": ["Anemia", "Weakness", "Recovery periods"],
        "mechanism_of_action": [
          {"name": "General", "description": "Provides essential nutrients that support metabolic processes, improve hemoglobin levels, and enhance overall physical health."}
        ],
        "dosage": "Typically prescribed as 1-2 teaspoons daily, or as directed by a healthcare provider.",
        "important_safety_information": "This supplement should be taken as directed by a healthcare provider. Please consult your doctor before use.",
        "quality_standards": ["WHO-GMP Certified", "Quality Tested"],
        "storage_instructions": "Store in a cool, dry place below 30°C. Keep away from direct sunlight. Keep out of reach of children.",
        "manufacturer": "Rokomed Pharma, MIDC Ranjangaon, Pune - 412220"
      }
    }
  ],
  "filters": {
    "categories": [
      { "id": "all", "name": "All Products", "icon": "faPrescriptionBottleMedical" },
      { "id": "antibiotics", "name": "Antibiotics", "icon": "faVirus" },
      { "id": "cardio", "name": "Cardiovascular", "icon": "faHeartPulse" },
      { "id": "respiratory", "name": "Respiratory", "icon": "faLungs" },
      { "id": "neuro", "name": "Neurological", "icon": "faBrain" },
      { "id": "gastro", "name": "Gastrointestinal", "icon": "faStethoscope" },
      { "id": "immunity", "name": "Immunity & Wellness", "icon": "faShieldVirus" },
      { "id": "otc", "name": "OTC Products", "icon": "faHandHoldingMedical" }
    ],
    "product_types": ["Tablet", "Capsule", "Syrup", "Injection"],
    "prescription": ["Prescription Required", "Over The Counter"]
  }
}; 