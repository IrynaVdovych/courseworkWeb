
const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://iryna:${process.env.PASS}@cluster0.utoaqp0.mongodb.net/`;

module.exports = {
    allCourses: async function allCourses() {
    
    const client = new MongoClient(uri);
    try {
      const database = client.db("COFFEELABSCHOOL");
      const courses = database.collection("courses");
      const cursor = courses.find();

      var result = [];

      for await (const elemnt of cursor) {
        result.push(elemnt);
      }

      return result;
    } finally {
      await client.close();
    }
    return [];
  },

  apply: async function apply(item) {
    const client = new MongoClient(uri);
    try {
        const database = client.db("COFFEELABSCHOOL");
        const applications = database.collection("applications");
        applications.insertOne(item);
    } finally {
        await client.close();
      }
  }
}