const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Participant = require('./models/Participant');
const Resource = require('./models/Resource');
// Import User, Session, Template models as well...

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB for seeding...');

        // Clear existing data
        await Participant.deleteMany();
        await Resource.deleteMany();

        // 5 Sample Participants
        const participants = [
            { name: "Alice", role: "Admin", email: "alice@test.com" },
            { name: "Bob", role: "Facilitator", email: "bob@test.com" },
            { name: "Charlie", role: "Contributor", email: "charlie@test.com" },
            { name: "Diana", role: "Observer", email: "diana@test.com" },
            { name: "Eve", role: "Contributor", email: "eve@test.com" }
        ];

        // 5 Sample Resources
        const resources = [
            { title: "Manual", type: "PDF", size: "2MB" },
            { title: "Slides", type: "PPTX", size: "10MB" },
            { title: "Notes", type: "DOCX", size: "1MB" },
            { title: "Video Guide", type: "Link", size: "N/A" },
            { title: "Policy", type: "PDF", size: "3MB" }
        ];

        await Participant.insertMany(participants);
        await Resource.insertMany(resources);
        
        console.log('Data seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();