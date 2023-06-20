const mongoose = require('mongoose');
const Candidate = require("../models/CandidateModel");

//באמצע הפונקציה
const registerCandidate = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, city, age } = req.body;
        if (!(firstName && lastName && phone && city && age)) {
            return res.status(400).json({ message: "יש למלא את כל שדות החובה" });
        }
        const candidateExist = await Matchmaker.findOne({ email });

        if (candidateExist) {
            return res.status(400).json({ message: "מועמד זה כבר קיים במערכת" });
        }
        else {
            const newCandidate = new Candidate({
                firstName: firstName,
                lastName: lastName,
                email:email,
                phone: phone,
                city: city,
                age: age,
            })

            await newCandidate.save();
            res.status(201).json({ message: "פרטיך התקבלו בהצלחה! פרטיך יבדקו על ידי המערכת ויועלו לאתר במידה והנך מתאים לדרישות האתר.", newCandidate: newCandidate })
        }

    }
    catch (err) {
        next(err)
    }

}

module.exports = {
    registerCandidate
}