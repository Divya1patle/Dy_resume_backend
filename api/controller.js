import resumeCollection from "./collection.js";
class resumeController {
  static createResume = async (req, res) => {
    try {
      console.log(req);
      const data = req.body
          const resumeData = new resumeCollection({
            name: data.name ,
            skills: data.skills,
            contactInfo: data.contactInfo,
            email: data.email,
            experiense: data.experiense,
            projectURL: data.projectURL,
          });
          resumeData.save().then(()=>{
            res.status(200).json({
                message: "Resume created successfully",
                data: resumeData,
              });
          }).catch(err=>{
            console.log(err)
          });
    } catch (err) {
      console.log(err);
    }
  };

  static getResume = async (req, res) => {
    try {
      console.log(req.params["resumeid"])
      const id=req.params["resumeid"];
      const data = await resumeCollection.findById(id);
      console.log(data);
      res.send(data)
      
       
    } catch (error) {}
  };
}

export default resumeController;
