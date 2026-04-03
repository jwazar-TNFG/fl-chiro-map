// Florida Chiropractic/Medical Centers Location Data
// Last updated: 2026-04-03 12:23 PM
// Total: 18 companies, ~180 locations

const companies = {
    'COR Medical Centers': { color: '#1e3a5f', initials: 'COR', isUs: true },
    'Complete Care': { color: '#ef4444', initials: 'CC' },
    'Action Physical Therapy': { color: '#a855f7', initials: 'APT' },
    'Path Medical': { color: '#3b82f6', initials: 'PM' },
    'Physicians Group': { color: '#f97316', initials: 'PG' },
    'RejuvenX': { color: '#14b8a6', initials: 'RX' },
    'ChiroCare of Florida': { color: '#eab308', initials: 'CCF' },
    'Back to Mind': { color: '#8b5cf6', initials: 'BTM' },
    'Total MD': { color: '#dc2626', initials: 'TMD' },
    'County Line Chiropractic': { color: '#10b981', initials: 'CLC' },
    'Fusion Chiropractic Spa': { color: '#ea580c', initials: 'FCS' },
    'Goldson Spine': { color: '#2563eb', initials: 'GS' },
    'Chiro Clinics of South FL': { color: '#06b6d4', initials: 'CCSF' },
    'Spine & Wellness Centers': { color: '#ec4899', initials: 'SWC' },
    'Icon Medical Centers': { color: '#84cc16', initials: 'IMC' },
    'FL Wellness & Rehab': { color: '#f43f5e', initials: 'FWR' },
    'FL Wellness Medical Group': { color: '#6366f1', initials: 'FWMG' },
    'Florida Injury Centers': { color: '#78716c', initials: 'FIC' }
};

const locations = [
    // ============================================
    // COR Medical Centers - 17 locations
    // ============================================
    {company: 'COR Medical Centers', name: 'Orlando', address: '1320 N Semoran Blvd, Ste 102, Orlando, FL 32807', lat: 28.5584, lng: -81.3057},
    {company: 'COR Medical Centers', name: 'North Miami', address: '12550 Biscayne Blvd, Ste 907, North Miami, FL 33181', lat: 25.8903, lng: -80.1625},
    {company: 'COR Medical Centers', name: 'Kendall', address: '13501 SW 128th St, Miami, FL 33186', lat: 25.6437, lng: -80.4089},
    {company: 'COR Medical Centers', name: 'Doral', address: '4001 NW 97th Ave, Ste 101B, Doral, FL 33178', lat: 25.8195, lng: -80.3570},
    {company: 'COR Medical Centers', name: 'Little Havana', address: '1333 Coral Way, Suite 200, Miami, FL 33145', lat: 25.7510, lng: -80.2148},
    {company: 'COR Medical Centers', name: 'Hollywood', address: '6030 Hollywood Blvd, Suite 140, Hollywood, FL 33024', lat: 26.0112, lng: -80.1695},
    {company: 'COR Medical Centers', name: 'Homestead', address: '15600 SW 288th St, Ste 403, Homestead, FL 33033', lat: 25.4687, lng: -80.4557},
    {company: 'COR Medical Centers', name: 'Hialeah', address: '1275 W 47th Pl, Ste 301, Hialeah, FL 33012', lat: 25.8706, lng: -80.3104},
    {company: 'COR Medical Centers', name: 'Sunrise', address: '7000 W Oakland Park Blvd, Suite 201, Sunrise, FL 33313', lat: 26.1640, lng: -80.2407},
    {company: 'COR Medical Centers', name: 'Ft. Lauderdale', address: '3107 Stirling Rd, Suite 206, Ft. Lauderdale, FL 33312', lat: 26.0567, lng: -80.1831},
    {company: 'COR Medical Centers', name: 'Pompano Beach', address: '911 E Atlantic Blvd, Suite 106, Pompano Beach, FL 33060', lat: 26.2379, lng: -80.1048},
    {company: 'COR Medical Centers', name: 'Tampa (Hillsborough)', address: '2333 W Hillsborough Ave, Ste 150, Tampa, FL 33603', lat: 27.9706, lng: -82.4772},
    {company: 'COR Medical Centers', name: 'Tampa (Fletcher)', address: '3450 E Fletcher Ave, Suite 320, Tampa, FL 33613', lat: 28.0506, lng: -82.4172},
    {company: 'COR Medical Centers', name: 'West Palm Beach', address: '2500 Metrocentre Blvd, Suite 7, West Palm Beach, FL 33407', lat: 26.7553, lng: -80.0864},
    {company: 'COR Medical Centers', name: 'Jacksonville', address: '1205 Monument Rd, Suite 202, Jacksonville, FL 32225', lat: 30.3122, lng: -81.5457},
    {company: 'COR Medical Centers', name: 'Kissimmee', address: 'Kissimmee, FL 34741', lat: 28.2920, lng: -81.4076},
    {company: 'COR Medical Centers', name: 'Naples', address: 'Naples, FL 34102', lat: 26.1420, lng: -81.7948},

    // ============================================
    // Chiro Clinics of South FL - 8 locations (NEW)
    // ============================================
    {company: 'Chiro Clinics of South FL', name: 'Pompano Beach (HQ)', address: '1410 S Powerline Rd, Pompano Beach, FL 33069', lat: 26.2279, lng: -80.1448},
    {company: 'Chiro Clinics of South FL', name: 'North Miami', address: '12550 Biscayne Blvd, Ste 404, North Miami, FL 33154', lat: 25.8903, lng: -80.1625},
    {company: 'Chiro Clinics of South FL', name: 'Miami Airport', address: '701 NW 57th Ave, Miami, FL 33126', lat: 25.7817, lng: -80.2678},
    {company: 'Chiro Clinics of South FL', name: 'Kendall', address: 'Kendall, FL 33176', lat: 25.6887, lng: -80.3389},
    {company: 'Chiro Clinics of South FL', name: 'Miami Lakes', address: 'Miami Lakes, FL 33014', lat: 25.9087, lng: -80.3104},
    {company: 'Chiro Clinics of South FL', name: 'Hollywood', address: '7050 Taft St, Hollywood, FL 33024', lat: 26.0312, lng: -80.1995},
    {company: 'Chiro Clinics of South FL', name: 'West Palm Beach', address: '2247 Palm Beach Lakes Blvd, West Palm Beach, FL 33409', lat: 26.7153, lng: -80.0864},
    {company: 'Chiro Clinics of South FL', name: 'Hialeah', address: 'Hialeah, FL 33012', lat: 25.8576, lng: -80.2781},

    // ============================================
    // Spine & Wellness Centers of America - 7 locations (NEW)
    // ============================================
    {company: 'Spine & Wellness Centers', name: 'Kendall', address: '8740 N Kendall Dr, Suite 208, Miami, FL 33176', lat: 25.6887, lng: -80.3389},
    {company: 'Spine & Wellness Centers', name: 'Miami Beach', address: '300 Arthur Godfrey Rd, Suite 201, Miami Beach, FL 33140', lat: 25.8153, lng: -80.1320},
    {company: 'Spine & Wellness Centers', name: 'Aventura', address: '21097 NE 27th Court, Suite 320, Aventura, FL 33180', lat: 25.9565, lng: -80.1392},
    {company: 'Spine & Wellness Centers', name: 'Miami (Brickell)', address: '3661 South Miami Ave, Suite 1008, Miami, FL 33133', lat: 25.7417, lng: -80.2178},
    {company: 'Spine & Wellness Centers', name: 'Fort Lauderdale', address: '4800 NE 20th Terrace, Suite 404, Fort Lauderdale, FL 33308', lat: 26.1868, lng: -80.1187},
    {company: 'Spine & Wellness Centers', name: 'Tamarac', address: '7421 N University Dr, Unit 212, Tamarac, FL 33321', lat: 26.2128, lng: -80.2506},
    {company: 'Spine & Wellness Centers', name: 'Delray Beach', address: '4800 Linton Blvd, Suite D-501, Delray Beach, FL 33445', lat: 26.4380, lng: -80.1184},

    // ============================================
    // Icon Medical Centers - 2 locations (NEW)
    // ============================================
    {company: 'Icon Medical Centers', name: 'Miami', address: '232 SW 8th St, Miami, FL 33130', lat: 25.7717, lng: -80.1978},
    {company: 'Icon Medical Centers', name: 'Hollywood', address: '3625 Hollywood Blvd, Hollywood, FL 33021', lat: 26.0112, lng: -80.1695},

    // ============================================
    // FL Wellness & Rehab - 3 locations (NEW)
    // ============================================
    {company: 'FL Wellness & Rehab', name: 'Homestead', address: '207 N Krome Ave, Homestead, FL 33030', lat: 25.4719, lng: -80.4772},
    {company: 'FL Wellness & Rehab', name: 'Tallahassee', address: '2339 N Monroe St, Tallahassee, FL 32303', lat: 30.4718, lng: -84.2898},
    {company: 'FL Wellness & Rehab', name: 'Hialeah', address: '2387 W 68th St, Suite 402-404, Hialeah, FL 33016', lat: 25.8906, lng: -80.3304},

    // ============================================
    // FL Wellness Medical Group - 4 locations (NEW)
    // ============================================
    {company: 'FL Wellness Medical Group', name: 'Tampa (Downtown)', address: '101 N Franklin St, Ste A, Tampa, FL 33602', lat: 27.9506, lng: -82.4572},
    {company: 'FL Wellness Medical Group', name: 'St. Petersburg', address: 'St. Petersburg, FL 33701', lat: 27.7676, lng: -82.6403},
    {company: 'FL Wellness Medical Group', name: 'Clearwater', address: 'Clearwater, FL 33755', lat: 27.9659, lng: -82.8001},
    {company: 'FL Wellness Medical Group', name: 'Carrollwood', address: 'Carrollwood, FL 33618', lat: 28.0556, lng: -82.5172},

    // ============================================
    // Florida Injury Centers - 25 locations (NEW - partial list)
    // ============================================
    {company: 'Florida Injury Centers', name: 'Jacksonville', address: 'Jacksonville, FL 32207', lat: 30.3322, lng: -81.6557},
    {company: 'Florida Injury Centers', name: 'Tampa', address: 'Tampa, FL 33607', lat: 27.9506, lng: -82.4572},
    {company: 'Florida Injury Centers', name: 'Orlando', address: 'Orlando, FL 32801', lat: 28.5383, lng: -81.3792},
    {company: 'Florida Injury Centers', name: 'St. Petersburg', address: 'St. Petersburg, FL 33701', lat: 27.7676, lng: -82.6403},
    {company: 'Florida Injury Centers', name: 'Lakeland', address: 'Lakeland, FL 33801', lat: 28.0395, lng: -81.9498},
    {company: 'Florida Injury Centers', name: 'Sarasota', address: 'Sarasota, FL 34231', lat: 27.3364, lng: -82.5307},
    {company: 'Florida Injury Centers', name: 'Fort Myers', address: 'Fort Myers, FL 33901', lat: 26.6406, lng: -81.8723},
    {company: 'Florida Injury Centers', name: 'Gainesville', address: 'Gainesville, FL 32601', lat: 29.6516, lng: -82.3248},
    {company: 'Florida Injury Centers', name: 'Tallahassee', address: 'Tallahassee, FL 32301', lat: 30.4383, lng: -84.2807},
    {company: 'Florida Injury Centers', name: 'Pensacola', address: 'Pensacola, FL 32501', lat: 30.4213, lng: -87.2169},
    {company: 'Florida Injury Centers', name: 'Daytona Beach', address: 'Daytona Beach, FL 32114', lat: 29.2108, lng: -81.0228},
    {company: 'Florida Injury Centers', name: 'Port Orange', address: '3821 Woodbriar Trail, Suite 103, Port Orange, FL 32129', lat: 29.1383, lng: -81.0028},
    {company: 'Florida Injury Centers', name: 'Ocala', address: 'Ocala, FL 34470', lat: 29.1872, lng: -82.1401},
    {company: 'Florida Injury Centers', name: 'West Palm Beach', address: 'West Palm Beach, FL 33401', lat: 26.7153, lng: -80.0534},
    {company: 'Florida Injury Centers', name: 'Delray Beach', address: 'Delray Beach, FL 33445', lat: 26.4615, lng: -80.0728},
    {company: 'Florida Injury Centers', name: 'Sunrise', address: 'Sunrise, FL 33313', lat: 26.1640, lng: -80.2407},
    {company: 'Florida Injury Centers', name: 'Brandon', address: 'Brandon, FL 33511', lat: 27.9378, lng: -82.2859},
    {company: 'Florida Injury Centers', name: 'New Port Richey', address: 'New Port Richey, FL 34655', lat: 28.2489, lng: -82.7193},
    {company: 'Florida Injury Centers', name: 'Wesley Chapel', address: 'Wesley Chapel, FL 33544', lat: 28.2397, lng: -82.3276},
    {company: 'Florida Injury Centers', name: 'Winter Haven', address: 'Winter Haven, FL 33880', lat: 28.0222, lng: -81.7328},

    // ============================================
    // Complete Care - 21 locations
    // ============================================
    {company: 'Complete Care', name: 'Orlando (Forest City)', address: '7984 Forest City Rd, Ste 106, Orlando, FL 32810', lat: 28.6063, lng: -81.4268},
    {company: 'Complete Care', name: 'Lake Mary', address: '1343 S International Pkwy, Lake Mary, FL 32746', lat: 28.7589, lng: -81.3178},
    {company: 'Complete Care', name: 'Casselberry', address: '1008 FL-436, Casselberry, FL 32707', lat: 28.6615, lng: -81.3287},
    {company: 'Complete Care', name: 'Leesburg', address: '106 W N Blvd, Ste 101, Leesburg, FL 34748', lat: 28.8108, lng: -81.8779},
    {company: 'Complete Care', name: 'Plant City', address: '1707 W Reynolds St, Ste 102, Plant City, FL 33563', lat: 28.0147, lng: -82.1376},
    {company: 'Complete Care', name: 'Kissimmee', address: '1078 Cypress Pkwy, Kissimmee, FL 34759', lat: 28.2920, lng: -81.4076},
    {company: 'Complete Care', name: 'Orlando (Colonial)', address: '2206 E Colonial Dr, Orlando, FL 32803', lat: 28.5538, lng: -81.3517},
    {company: 'Complete Care', name: 'Waterford Lakes', address: '12780 Waterford Lakes Pkwy, Ste 100, Orlando, FL 32828', lat: 28.5467, lng: -81.2108},
    {company: 'Complete Care', name: 'Orlando (Town Center)', address: '4118 Town Center Blvd, Orlando, FL 32837', lat: 28.3826, lng: -81.4096},
    {company: 'Complete Care', name: 'Melbourne', address: '1515 Elizabeth St Ste E, Melbourne, FL 32901', lat: 28.0836, lng: -80.6081},
    {company: 'Complete Care', name: 'Oviedo', address: 'Oviedo, FL 32765', lat: 28.6700, lng: -81.2081},
    {company: 'Complete Care', name: 'Maitland', address: 'Maitland, FL 32751', lat: 28.6275, lng: -81.3631},
    {company: 'Complete Care', name: 'DeBary', address: 'DeBary, FL 32713', lat: 28.8833, lng: -81.3086},
    {company: 'Complete Care', name: 'Lady Lake', address: 'Lady Lake, FL 32159', lat: 28.9178, lng: -81.9359},
    {company: 'Complete Care', name: "Hunter's Creek", address: "Hunter's Creek, FL 32837", lat: 28.3560, lng: -81.4220},
    {company: 'Complete Care', name: 'Lakeland', address: '1205 E Magnolia St, Ste 105, Lakeland, FL 33801', lat: 28.0395, lng: -81.9498},
    {company: 'Complete Care', name: 'Winter Haven', address: '7494 Cypress Gardens Blvd, Winter Haven, FL 33884', lat: 28.0217, lng: -81.7328},
    {company: 'Complete Care', name: 'Wesley Chapel', address: 'Wesley Chapel, FL 33544', lat: 28.2397, lng: -82.3276},
    {company: 'Complete Care', name: 'Cocoa', address: 'Cocoa, FL 32922', lat: 28.3861, lng: -80.7420},
    {company: 'Complete Care', name: 'DeLand', address: 'DeLand, FL 32720', lat: 29.0283, lng: -81.3031},
    {company: 'Complete Care', name: 'Titusville', address: 'Titusville, FL 32796', lat: 28.6122, lng: -80.8076},

    // ============================================
    // Action Physical Therapy - 22 locations
    // ============================================
    {company: 'Action Physical Therapy', name: 'Hollywood', address: '3900 Hollywood Blvd, Ste 204, Hollywood, FL 33021', lat: 26.0112, lng: -80.1695},
    {company: 'Action Physical Therapy', name: 'Port St. Lucie East', address: '1680 SE Lyngate Dr, Ste 203, Port St. Lucie, FL 34952', lat: 27.2753, lng: -80.3256},
    {company: 'Action Physical Therapy', name: 'Port St. Lucie West', address: '1680 SW St Lucie W Blvd, Ste 202, Port St. Lucie, FL 34986', lat: 27.2853, lng: -80.3956},
    {company: 'Action Physical Therapy', name: 'West Palm Beach', address: '580 Village Blvd, Ste 215, West Palm Beach, FL 33409', lat: 26.7153, lng: -80.0664},
    {company: 'Action Physical Therapy', name: 'Boynton Beach', address: '4971 Le Chalet Blvd, Ste 100, Boynton Beach, FL 33436', lat: 26.5317, lng: -80.0867},
    {company: 'Action Physical Therapy', name: 'Boca Raton', address: '950 Glades Rd, Boca Raton, FL 33431', lat: 26.3683, lng: -80.1531},
    {company: 'Action Physical Therapy', name: 'Lake Worth', address: '4175 S Congress Ave, Lake Worth, FL 33461', lat: 26.5817, lng: -80.0867},
    {company: 'Action Physical Therapy', name: 'The Villages', address: '8564 East CR 466 Ste 303, The Villages, FL 32162', lat: 28.9001, lng: -81.9437},
    {company: 'Action Physical Therapy', name: 'Miami', address: '930 SW 82nd Ave, Miami, FL 33144', lat: 25.7617, lng: -80.3128},
    {company: 'Action Physical Therapy', name: 'Palm Beach Gardens', address: '10358 Riverside Dr #140, Palm Beach Gardens, FL 33410', lat: 26.8234, lng: -80.0917},
    {company: 'Action Physical Therapy', name: 'Tampa', address: '6912 Asphalt Ave, Tampa, FL 33614', lat: 27.9945, lng: -82.5197},
    {company: 'Action Physical Therapy', name: 'Winter Garden', address: '730 S Dillard St, Winter Garden, FL 34787', lat: 28.5553, lng: -81.5861},
    {company: 'Action Physical Therapy', name: 'Okeechobee', address: '3912 SE 18th Terrace, Okeechobee, FL 34974', lat: 27.2253, lng: -80.8126},
    {company: 'Action Physical Therapy', name: 'Fort Pierce', address: '600 N Highway 1 Unit 606A, Fort Pierce, FL 34950', lat: 27.4467, lng: -80.3256},
    {company: 'Action Physical Therapy', name: 'Stuart', address: '111 SE Osceola St #200, Stuart, FL 34994', lat: 27.1976, lng: -80.2528},
    {company: 'Action Physical Therapy', name: 'Royal Palm Beach', address: '106 Ponce De Leon St, Royal Palm Beach, FL 33411', lat: 26.7081, lng: -80.2304},
    {company: 'Action Physical Therapy', name: 'Delray Beach', address: '160 Congress Park Dr Ste 101, Delray Beach, FL 33445', lat: 26.4615, lng: -80.1053},
    {company: 'Action Physical Therapy', name: 'Oakland Park', address: '3434 NE 12th Ave, Oakland Park, FL 33334', lat: 26.1687, lng: -80.1179},
    {company: 'Action Physical Therapy', name: 'Plantation', address: '100 NW 82nd Ave #204, Plantation, FL 33324', lat: 26.1225, lng: -80.2563},
    {company: 'Action Physical Therapy', name: 'Davie', address: '5149 S University Dr, Davie, FL 33328', lat: 26.0650, lng: -80.2378},
    {company: 'Action Physical Therapy', name: 'North Miami Beach', address: '150 NW 168th St Suite 304, North Miami Beach, FL 33169', lat: 25.9303, lng: -80.1973},
    {company: 'Action Physical Therapy', name: 'Daytona Beach', address: '369 Bill France Blvd, Daytona Beach, FL 32114', lat: 29.1872, lng: -81.0584},

    // ============================================
    // Path Medical - 20 locations
    // ============================================
    {company: 'Path Medical', name: 'Oakland Park', address: '2659 W Oakland Park Blvd, Oakland Park, FL 33311', lat: 26.1668, lng: -80.1542},
    {company: 'Path Medical', name: 'Pompano Beach', address: '601 E Sample Rd, Ste 109, Pompano Beach, FL 33064', lat: 26.2479, lng: -80.1148},
    {company: 'Path Medical', name: 'Orlando (OBT)', address: '6220 S Orange Blossom Trl, Ste 606, Orlando, FL 32809', lat: 28.4683, lng: -81.3992},
    {company: 'Path Medical', name: 'Hollywood', address: '2544 N State Road 7, Pembroke Park, FL 33021', lat: 26.0112, lng: -80.1495},
    {company: 'Path Medical', name: 'Hialeah', address: '1490 W 49th Pl S, Hialeah, FL 33012', lat: 25.8576, lng: -80.2781},
    {company: 'Path Medical', name: 'Kissimmee', address: '1040 E Osceola Pkwy, Kissimmee, FL 34744', lat: 28.2920, lng: -81.3876},
    {company: 'Path Medical', name: 'Kendall', address: '8740 N Kendall Dr, Miami, FL 33176', lat: 25.6887, lng: -80.3389},
    {company: 'Path Medical', name: 'Cutler Bay', address: '11285 SW 211th St, Ste 302, Miami, FL 33189', lat: 25.5837, lng: -80.3489},
    {company: 'Path Medical', name: 'Port St. Lucie', address: '549 NW Lake Whitney Pl, Port St. Lucie, FL 34986', lat: 27.2953, lng: -80.3856},
    {company: 'Path Medical', name: 'Boca Raton', address: '2900 N Military Trl, Ste 120, Boca Raton, FL 33431', lat: 26.3883, lng: -80.1031},
    {company: 'Path Medical', name: 'North Miami', address: '18999 Biscayne Blvd, Miami, FL 33180', lat: 25.9553, lng: -80.1420},
    {company: 'Path Medical', name: 'Fort Lauderdale', address: '2304 W Oakland Park Blvd, Fort Lauderdale, FL 33311', lat: 26.1668, lng: -80.1642},
    {company: 'Path Medical', name: 'Pembroke Pines', address: 'Pembroke Pines, FL 33024', lat: 26.0128, lng: -80.2962},
    {company: 'Path Medical', name: 'Orlando Central', address: 'Orlando, FL 32801', lat: 28.5383, lng: -81.3792},
    {company: 'Path Medical', name: 'Tampa', address: '4221 N Himes Ave, Ste 102, Tampa, FL 33607', lat: 27.9606, lng: -82.5072},
    {company: 'Path Medical', name: 'Lakeland', address: 'Lakeland, FL 33801', lat: 28.0395, lng: -81.9498},
    {company: 'Path Medical', name: 'St. Petersburg', address: 'St. Petersburg, FL 33701', lat: 27.7676, lng: -82.6403},
    {company: 'Path Medical', name: 'Haines City', address: 'Haines City, FL 33844', lat: 28.1142, lng: -81.6179},
    {company: 'Path Medical', name: 'Longwood', address: 'Longwood, FL 32750', lat: 28.7031, lng: -81.3384},
    {company: 'Path Medical', name: 'Tamarac', address: 'Tamarac, FL 33321', lat: 26.2128, lng: -80.2506},

    // ============================================
    // Physicians Group - 17 locations
    // ============================================
    {company: 'Physicians Group', name: 'Jacksonville Beach', address: '4417 Beach Blvd, Jacksonville, FL 32207', lat: 30.2866, lng: -81.6062},
    {company: 'Physicians Group', name: 'Tampa North', address: 'N Florida Ave, Tampa, FL 33612', lat: 28.0106, lng: -82.4572},
    {company: 'Physicians Group', name: 'Tampa Himes', address: 'Himes Ave, Tampa, FL 33607', lat: 27.9706, lng: -82.4972},
    {company: 'Physicians Group', name: 'Fort Myers', address: '3635 Central Ave, Fort Myers, FL 33901', lat: 26.6406, lng: -81.8623},
    {company: 'Physicians Group', name: 'Spring Hill', address: '4412 Commercial Way, Spring Hill, FL 34606', lat: 28.4789, lng: -82.5476},
    {company: 'Physicians Group', name: 'New Port Richey', address: '8813 River Crossing Blvd, New Port Richey, FL 34655', lat: 28.2489, lng: -82.6776},
    {company: 'Physicians Group', name: 'Sarasota', address: '4054 Sawyer Rd, Sarasota, FL 34233', lat: 27.3064, lng: -82.4807},
    {company: 'Physicians Group', name: 'St. Petersburg', address: 'St. Petersburg, FL 33701', lat: 27.7676, lng: -82.6403},
    {company: 'Physicians Group', name: 'Pensacola', address: 'Pensacola, FL 32501', lat: 30.4213, lng: -87.2169},
    {company: 'Physicians Group', name: 'Bradenton', address: 'Bradenton, FL 34205', lat: 27.4989, lng: -82.5748},
    {company: 'Physicians Group', name: 'Lakeland', address: 'Lakeland, FL 33801', lat: 28.0395, lng: -81.9498},
    {company: 'Physicians Group', name: 'Jacksonville Normandy', address: 'Jacksonville, FL 32205', lat: 30.3022, lng: -81.7057},
    {company: 'Physicians Group', name: 'Clearwater', address: 'Clearwater, FL 33755', lat: 27.9659, lng: -82.8001},
    {company: 'Physicians Group', name: 'Orlando', address: 'Orlando, FL 32801', lat: 28.5383, lng: -81.3792},
    {company: 'Physicians Group', name: 'Naples', address: 'Naples, FL 34102', lat: 26.1420, lng: -81.7948},
    {company: 'Physicians Group', name: 'Ocala', address: 'Ocala, FL 34470', lat: 29.1872, lng: -82.1401},
    {company: 'Physicians Group', name: 'Gainesville', address: 'Gainesville, FL 32601', lat: 29.6516, lng: -82.3248},

    // ============================================
    // ChiroCare of Florida - 10 locations
    // ============================================
    {company: 'ChiroCare of Florida', name: 'Aventura', address: '20601 E Dixie Hwy STE 410, Aventura, FL 33180', lat: 25.9565, lng: -80.1392},
    {company: 'ChiroCare of Florida', name: 'Boca Raton', address: '9325 Glades Rd #108, Boca Raton, FL 33434', lat: 26.3683, lng: -80.1531},
    {company: 'ChiroCare of Florida', name: 'Boynton Beach', address: '1800 Woolbright Rd Ste 101, Boynton Beach, FL 33426', lat: 26.5117, lng: -80.0867},
    {company: 'ChiroCare of Florida', name: 'Coral Springs', address: '6269 W Sample Rd, Coral Springs, FL 33067', lat: 26.2712, lng: -80.2706},
    {company: 'ChiroCare of Florida', name: 'Fort Lauderdale', address: '701 E Broward Blvd Suite D, Fort Lauderdale, FL 33301', lat: 26.1224, lng: -80.1373},
    {company: 'ChiroCare of Florida', name: 'Greenacres', address: '5817 Lake Worth Rd, Greenacres, FL 33463', lat: 26.6181, lng: -80.1304},
    {company: 'ChiroCare of Florida', name: 'Plantation', address: '801 S University Dr J-101, Plantation, FL 33324', lat: 26.1225, lng: -80.2463},
    {company: 'ChiroCare of Florida', name: 'Pompano Beach', address: '1301 E Atlantic Blvd STE 2, Pompano Beach, FL 33060', lat: 26.2379, lng: -80.1048},
    {company: 'ChiroCare of Florida', name: 'Port St. Lucie', address: '8980 S U.S. Hwy 1 STE 104, Port St. Lucie, FL 34952', lat: 27.2553, lng: -80.2556},
    {company: 'ChiroCare of Florida', name: 'Weston/Davie', address: '4470 Weston Rd, Davie, FL 33331', lat: 26.1003, lng: -80.3997},

    // ============================================
    // Back to Mind - 9 locations
    // ============================================
    {company: 'Back to Mind', name: 'Fort Lauderdale', address: '6450 NW 5th Way, Fort Lauderdale, FL 33309', lat: 26.1943, lng: -80.1787},
    {company: 'Back to Mind', name: 'Hollywood', address: '3990 Sheridan St, Ste 201, Hollywood, FL 33021', lat: 26.0217, lng: -80.2031},
    {company: 'Back to Mind', name: 'Coral Springs', address: '2825 N University Dr, Ste 100, Coral Springs, FL 33065', lat: 26.2712, lng: -80.2506},
    {company: 'Back to Mind', name: 'Tamarac', address: '7431 N University Dr #206, Tamarac, FL 33321', lat: 26.2128, lng: -80.2506},
    {company: 'Back to Mind', name: 'West Palm Beach', address: '4700 N Congress Ave Suite 202, West Palm Beach, FL 33407', lat: 26.7553, lng: -80.0864},
    {company: 'Back to Mind', name: 'North Miami', address: '1125 NE 125th St unit 303, North Miami, FL 33161', lat: 25.8903, lng: -80.1825},
    {company: 'Back to Mind', name: 'Kendall', address: 'Kendall, FL 33176', lat: 25.6887, lng: -80.3389},
    {company: 'Back to Mind', name: 'Pembroke Pines', address: 'Pembroke Pines, FL 33024', lat: 26.0128, lng: -80.2962},
    {company: 'Back to Mind', name: 'Margate', address: 'Margate, FL 33063', lat: 26.2445, lng: -80.2064},

    // ============================================
    // RejuvenX - 11 locations
    // ============================================
    {company: 'RejuvenX', name: 'Tampa', address: '2506 W Virginia Ave, Unit B, Tampa, FL 33607', lat: 27.9506, lng: -82.4972},
    {company: 'RejuvenX', name: 'Sarasota', address: 'Sarasota, FL 34231', lat: 27.3364, lng: -82.5307},
    {company: 'RejuvenX', name: 'Naples', address: 'Naples, FL 34102', lat: 26.1420, lng: -81.7948},
    {company: 'RejuvenX', name: 'Fort Myers', address: 'Fort Myers, FL 33901', lat: 26.6406, lng: -81.8723},
    {company: 'RejuvenX', name: 'Port Charlotte', address: 'Port Charlotte, FL 33952', lat: 26.9756, lng: -82.0906},
    {company: 'RejuvenX', name: 'St. Petersburg', address: 'St. Petersburg, FL 33709', lat: 27.7876, lng: -82.7403},
    {company: 'RejuvenX', name: 'Royal Palm Beach', address: 'Royal Palm Beach, FL 33411', lat: 26.7081, lng: -80.2304},
    {company: 'RejuvenX', name: 'West Palm Beach', address: 'West Palm Beach, FL 33407', lat: 26.7153, lng: -80.0664},
    {company: 'RejuvenX', name: 'Bradenton', address: 'Bradenton, FL 34205', lat: 27.4989, lng: -82.5748},
    {company: 'RejuvenX', name: 'Cape Coral', address: 'Cape Coral, FL 33904', lat: 26.5628, lng: -81.9495},
    {company: 'RejuvenX', name: 'Bonita Springs', address: 'Bonita Springs, FL 34135', lat: 26.3398, lng: -81.7787},

    // ============================================
    // County Line Chiropractic - 6 locations
    // ============================================
    {company: 'County Line Chiropractic', name: 'Miami Gardens', address: 'Miami Gardens, FL 33056', lat: 25.9420, lng: -80.2456},
    {company: 'County Line Chiropractic', name: 'North Miami Beach', address: '1857 NE Miami Gardens Dr, North Miami Beach, FL 33179', lat: 25.9333, lng: -80.1673},
    {company: 'County Line Chiropractic', name: 'Pembroke Pines', address: 'Pembroke Pines, FL 33024', lat: 26.0128, lng: -80.2962},
    {company: 'County Line Chiropractic', name: 'Plantation', address: '199 N State Road 7, Plantation, FL 33317', lat: 26.1225, lng: -80.2563},
    {company: 'County Line Chiropractic', name: 'Lauderhill', address: 'Commercial & University, Lauderhill, FL 33313', lat: 26.1661, lng: -80.2134},
    {company: 'County Line Chiropractic', name: 'Oakland Park', address: '926 E Cypress Creek Rd, Fort Lauderdale, FL 33334', lat: 26.1887, lng: -80.1279},

    // ============================================
    // Total MD - 5 locations
    // ============================================
    {company: 'Total MD', name: 'Fort Lauderdale', address: '2700 W Cypress Creek Rd Ste C100, Fort Lauderdale, FL 33309', lat: 26.1868, lng: -80.1687},
    {company: 'Total MD', name: 'Boca Raton', address: '1905 Clint Moore Rd Ste 308, Boca Raton, FL 33496', lat: 26.4015, lng: -80.1031},
    {company: 'Total MD', name: 'Coral Springs', address: 'Coral Springs, FL 33065', lat: 26.2712, lng: -80.2706},
    {company: 'Total MD', name: 'Pembroke Pines', address: 'Pembroke Pines, FL 33024', lat: 26.0128, lng: -80.2962},
    {company: 'Total MD', name: 'Plantation', address: 'Plantation, FL 33324', lat: 26.1225, lng: -80.2563},

    // ============================================
    // Fusion Chiropractic Spa - 6 locations
    // ============================================
    {company: 'Fusion Chiropractic Spa', name: 'Delray Beach', address: '1836 S Federal Hwy, Delray Beach, FL 33483', lat: 26.4515, lng: -80.0706},
    {company: 'Fusion Chiropractic Spa', name: 'Boynton Beach', address: '3717 W Boynton Beach Blvd #9, Boynton Beach, FL 33436', lat: 26.5217, lng: -80.1167},
    {company: 'Fusion Chiropractic Spa', name: 'Coconut Creek', address: '1383 Lyons Rd, Coconut Creek, FL 33063', lat: 26.2778, lng: -80.1892},
    {company: 'Fusion Chiropractic Spa', name: 'Boca Raton', address: 'Boca Raton, FL 33431', lat: 26.3683, lng: -80.1031},
    {company: 'Fusion Chiropractic Spa', name: 'Lake Worth', address: 'Lake Worth, FL 33461', lat: 26.6168, lng: -80.0534},
    {company: 'Fusion Chiropractic Spa', name: 'West Palm Beach', address: 'West Palm Beach, FL 33401', lat: 26.7153, lng: -80.0534},

    // ============================================
    // Goldson Spine - 5 locations
    // ============================================
    {company: 'Goldson Spine', name: 'North Lauderdale', address: '1335 S State Road 7, North Lauderdale, FL 33068', lat: 26.2178, lng: -80.2234},
    {company: 'Goldson Spine', name: 'Plantation', address: '734 N State Rd 7, Plantation, FL 33317', lat: 26.1325, lng: -80.2563},
    {company: 'Goldson Spine', name: 'Pembroke Pines', address: '10796 Pines Blvd #101, Pembroke Pines, FL 33026', lat: 26.0128, lng: -80.3362},
    {company: 'Goldson Spine', name: 'Aventura', address: 'Aventura, FL 33180', lat: 25.9565, lng: -80.1392},
    {company: 'Goldson Spine', name: 'Port St. Lucie', address: 'Port St. Lucie, FL 34952', lat: 27.2553, lng: -80.3256}
];

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { companies, locations };
}
