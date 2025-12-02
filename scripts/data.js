const { sequelize } = require('../src/models');
const { User, Property, Amenity, Builder, Lead, Listing, PropertyType } = require('../src/models');

const seedUsers = async () => {
    await User.bulkCreate([
        {
          "full_name": "Rahul Sharma",
          "email": "rahul@example.com",
          "phone": "9876543210",
          "role": "buyer",
          "password_hash": "placeholder"
        },
        {
          "full_name": "Anita Verma",
          "email": "anita@example.com",
          "phone": "9123456780",
          "role": "seller",
          "password_hash": "placeholder"
        },
        {
          "full_name": "Deepak Singh",
          "email": "deepak.agent@example.com",
          "phone": "9988776655",
          "role": "agent",
          "password_hash": "placeholder"
        },
        {
          "full_name": "Admin User",
          "email": "admin@example.com",
          "role": "admin",
          "password_hash": "placeholder"
        },
        {
          "full_name": "Priya Kapoor",
          "email": "priya.buyer@example.com",
          "phone": "9871234560",
          "role": "buyer",
          "password_hash": "placeholder"
        },
        {
          "full_name": "Amit Mehra",
          "email": "amit.agent@example.com",
          "phone": "9955667788",
          "role": "agent",
          "password_hash": "placeholder"
        }
      ]
  );
};

const seedPropertyTypes = async () => {
    const propertyTypes = [
      { name: 'Villa' },
      { name: 'Commercial' },
      { name: 'Flat' },
      { name: 'PG/Hostel' },
      { name: 'Plot' }
    ];
    await PropertyType.bulkCreate(propertyTypes);
};

const seedProperties = async () => {
    await Property.bulkCreate([
        {
          "user_id": 4,
          "title": "1BHK Villa in Kondapur",
          "description": "Modern villa with futuristic amenities and VR tour.",
          "property_type": "Villa",
          "listing_type": "rent",
          "price": 8619209,
          "area": 1777,
          "bedrooms": 1,
          "bathrooms": 1,
          "furnishing": "Semi-Furnished",
          "status": "active",
          "posted_at": "2025-11-06T00:00:00Z",
          "images": [
            "https://picsum.photos/400/300/?construction,building&sig=1",
            "https://picsum.photos/400/300/?construction,building&sig=2"
          ],
          "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "latitude": 18.5204,
            "longitude": 73.8567,
            "address": "Kondapur"
          },
          "amenities": [
            "Eco-Rating",
            "Gym",
            "EV Charging Station"
          ],
          "ai_price_estimate": 8791593,
          "eco_rating": 8.2,
          "tags": ["Featured"]
        },
        {
          "user_id": 5,
          "title": "0BHK Commercial in Kondapur",
          "description": "Modern commercial with futuristic amenities and VR tour.",
          "property_type": "Commercial",
          "listing_type": "rent",
          "price": 5278451,
          "area": 2315,
          "bedrooms": 0,
          "bathrooms": 2,
          "furnishing": "Unfurnished",
          "status": "active",
          "posted_at": "2025-11-18T00:00:00Z",
          "images": [
            "https://picsum.photos/400/300/?construction,building&sig=3",
            "https://picsum.photos/400/300/?construction,building&sig=4"
          ],
          "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "latitude": 18.5204,
            "longitude": 73.8567,
            "address": "Kondapur Main Street"
          },
          "amenities": [
            "Eco-Rating",
            "Rainwater Harvesting",
            "Solar Panels",
            "Community Hall",
            "EV Charging Station",
            "WiFi"
          ],
          "ai_price_estimate": 5384020,
          "eco_rating": 9.2,
          "tags": ["Featured"]
        },
        {
          "user_id": 5,
          "title": "4BHK Flat in Gacchibowli",
          "description": "Modern flat with futuristic amenities and VR tour.",
          "property_type": "Flat",
          "listing_type": "rent",
          "price": 4914588,
          "area": 2836,
          "bedrooms": 4,
          "bathrooms": 4,
          "furnishing": "Unfurnished",
          "status": "active",
          "posted_at": "2025-11-22T00:00:00Z",
          "images": [
            "https://picsum.photos/400/300/?construction,building&sig=8",
            "https://picsum.photos/400/300/?construction,building&sig=10"
          ],
          "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "latitude": 22.5726,
            "longitude": 88.3639,
            "address": "Gacchibowli Main Street"
          },
          "amenities": [
            "CCTV Security",
            "WiFi",
            "Gym",
            "Rainwater Harvesting",
            "Parking",
            "Solar Panels"
          ],
          "ai_price_estimate": 5012879,
          "eco_rating": 9.1,
          "tags": ["Featured"]
        },
        {
          "user_id": 5,
          "title": "1BHK Flat in Miyapur",
          "description": "Modern flat with futuristic amenities and VR tour.",
          "property_type": "Flat",
          "listing_type": "sale",
          "price": 9931830,
          "area": 796,
          "bedrooms": 1,
          "bathrooms": 1,
          "furnishing": "Furnished",
          "status": "active",
          "posted_at": "2025-11-06T00:00:00Z",
          "images": [
            "https://picsum.photos/400/300/?construction,building&sig=15",
            "https://picsum.photos/400/300/?construction,building&sig=23"
          ],
          "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "latitude": 23.0225,
            "longitude": 72.5714,
            "address": "Miyapur Main Street"
          },
          "amenities": [
            "Rainwater Harvesting",
            "Gym",
            "Clubhouse",
            "Garden",
            "WiFi"
          ],
          "ai_price_estimate": 10130466,
          "eco_rating": 7.9,
          "tags": ["Featured"]
        }
    ]);
};

const seedAmenities = async () => {
    const amenities = [
      "Parking", "Gym", "Lift", "Swimming Pool", "Garden", "WiFi", "Smart Home", 
      "Solar Panels", "VR Tour", "Eco-Rating", "CCTV Security", "Clubhouse", 
      "Community Hall", "EV Charging Station", "Rainwater Harvesting"
    ];
    const amenityData = amenities.map(name => ({ name }));
    await Amenity.bulkCreate(amenityData);
};

const seedBuilders = async () => {
    const builders = [
      {
        "builder_id": 1,
        "builder_name": "Skyline Developers",
        "total_properties": 2,
        "total_views": 2350,
        "total_leads": 85,
        "active_listings": 2
      },
      {
        "builder_id": 2,
        "builder_name": "Green Valley Constructions",
        "total_properties": 2,
        "total_views": 1880,
        "total_leads": 60,
        "active_listings": 2
      },
      {
        "builder_id": 3,
        "builder_name": "Urban Heights Builders",
        "total_properties": 1,
        "total_views": 560,
        "total_leads": 18,
        "active_listings": 0
      }
    ];
    await Builder.bulkCreate(builders);
};

const seedLeads = async () => {
    const leads = [
      { "property_id": 1, "user_id": 5, "status": "pending" },
      { "property_id": 2, "user_id": 1, "status": "pending" },
      { "property_id": 3, "user_id": 1, "status": "pending" },
      { "property_id": 4, "user_id": 5, "status": "pending" }
    ];
    await Lead.bulkCreate(leads, { ignoreDuplicates: true });
};

const seedListings = async () => {
    const listings = [
      {
        "property_id": 1,
        "agent_id": 1,
        "listing_type": "rent",
        "price": 12000000,
        "status": "active",
        
      },
      {
        "property_id": 2,
        "agent_id": 2,
        "listing_type": "rent",
        "price": 28000000,
        "status": "active",
        
      },
      {
        "property_id": 3,
        "agent_id": 3,
        "listing_type": "rent",
        "price": 8500000,
        "status": "inactive",
        
      },
      {
        "property_id": 4,
        "agent_id": 1,
        "listing_type": "rent",
        "price": 15000000,
        "status": "active",
        
      },
      {
        "property_id": 1,
        "agent_id": 2,
        "listing_type": "rent",
        "price": 23000000,
        "status": 'active',
        
      }
    ];
    await Listing.bulkCreate(listings, { ignoreDuplicates: true });
};

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced!');
        await seedUsers();
        console.log('Users seeded!');
        await seedBuilders();
        console.log('Builders seeded!');
        await seedPropertyTypes();
        console.log('Property types seeded!');
        await seedProperties();
        console.log('Properties seeded!');
        await seedAmenities();
        console.log('Amenities seeded!');
        await seedListings();
        console.log('Listings seeded!');
        await seedLeads();
        console.log('Leads seeded!');
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
