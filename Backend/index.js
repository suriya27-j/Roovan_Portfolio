const express = require("express");
const app=express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://suriya:RQGOtEp9Q9bWwnAL@cluster0.akspe9j.mongodb.net/roopanProfolio").then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


app.get("/", (req, res) => {
  res.send("Express app is running");
});

const Storage = multer.diskStorage({
  destination: './Upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: Storage });

// Serve static files
app.use('/images', express.static('Upload/images'));

// Handle image upload
app.post('/upload', upload.single('details'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  });
});


// Define a Mongoose schema for the 'details' collection
const detailsSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  about: String,
  image_url:String
});

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Detail', detailsSchema);

app.post('/add_details', async (req, res) => {
    try {
        const detail = new Detail({
            name: req.body.name,
            tagline: req.body.tagline,
            about: req.body.about,
            image_url:req.body.image_url
        });
        
        console.log(detail);
        
        await detail.save(); // Save the new detail object
        
        console.log("saved");
        
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error adding details:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


// Retrieve details from the 'details' collection
app.get("/show_details", async (req, res) => {
    try {
      const detail = await Detail.findOne(); // Retrieve the first document in the collection
      if (detail) {
        res.send(detail); // Send the details as a response
      } else {
        res.status(404).send("Details not found");
      }
    } catch (error) {
      console.error("Error retrieving details:", error);
      res.status(500).send("Internal server error");
    }
  });


// Define a Mongoose schema for the 'details' collection
const eduDetailsSchema = new mongoose.Schema({
  name: String,
  Location:String,
  edu:String,
  Type: String,
  Duration: String,
});

const eduDetails = mongoose.model('eduDetails',eduDetailsSchema);


app.post('/add_edu_details', async (req, res) => {
    try {
        const edu_detail = new eduDetails({

          name:req.body.name,
          Location:req.body.Location,
          edu:req.body.edu,
          Type: req.body.Type,
          Duration: req.body.Duration,
          About:req.body.About
        });
        
        console.log(edu_detail);
        
        await edu_detail.save(); // Save the new detail object
        
        console.log("saved");
        
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error adding details:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Retrieve details from the 'details' collection
app.get("/show_edu_details", async (req, res) => {
  try {
    const edu_detail = await eduDetails.find(); // Retrieve the first document in the collection
    if (edu_detail) {
      res.send(edu_detail); // Send the details as a response
    } else {
      res.status(404).send("Details not found");
    }
  } catch (error) {
    console.error("Error retrieving details:", error);
    res.status(500).send("Internal server error");
  }
});


const work_exp_schema = new mongoose.Schema({
  company_name:String,
  Role:String,
  Duration:String
});
const work_exp = mongoose.model('work_detail',work_exp_schema);

app.post('/add_work_exp', async (req, res) => {
  try {
      const work_detail = new work_exp({
        company_name:req.body.company_name,
        Role:req.body.Role,
        Duration:req.body.Duration
          
      });
      
      console.log(work_detail);
      
      await work_detail.save(); // Save the new detail object
      
      console.log("saved");
      
      res.json({
          success: true,
          name: req.body.name
      });
  } catch (error) {
      console.error("Error adding details:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
  }
});


app.get("/show_work_details", async (req, res) => {
  try {
    const work_detail = await work_exp.find(); // Use the correct model name here
    if (work_detail) {
      res.send(work_detail); // Send the details as a response
    } else {
      res.status(404).send("Details not found");
    }
  } catch (error) {
    console.error("Error retrieving details:", error);
    res.status(500).send("Internal server error");
  }
});


//for projects
const projectSchema = new mongoose.Schema({
  projectTitle:String,
  image:String,
  description:String,
  techStack:String,
  gitlink:String
})
const Project = mongoose.model('project_details',projectSchema);

app.post('/add_projects', async (req, res) => {
  try {
    const project_details = new Project({
      projectTitle: req.body.projectTitle,
      image: req.body.image,
      description: req.body.description,
      techStack: req.body.techStack,
      gitlink: req.body.gitlink 
    });

    console.log(project_details);
    await project_details.save();
    console.log("saved");

    res.json({
      success: true,
      name: req.body.name // Assuming you're also sending name in the request body
    });
  } catch (error) {
    console.error("Error adding project details:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.get('/show_projects', async (req, res) => {
  try {
    const project_details = await Project.find();
    if (project_details.length > 0) { 
      res.json(project_details);
    } else {
      res.status(404).send("Details not found");
    }
  } catch (error) {
    console.error("Error retrieving details:", error);
    res.status(500).send("Internal server error");
  }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
