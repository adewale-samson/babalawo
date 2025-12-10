import React, { useEffect, useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [dob, setDob] = useState("");
  const [experience, setExperience] = useState(0);
  const [favoriteColor, setFavoriteColor] = useState("#000");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setProfilePicture(e.target.files[0]);
  };

  const validate = () => {
    const newErrors = {};

    if (!fullname.trim()) newErrors.fullname = "Full name is required";
    if (!email.includes("@")) newErrors.email = "Valid email is required";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!age || age < 1) newErrors.age = "Enter a valid age";
    if (!gender) newErrors.gender = "Please select a gender";
    if (!country) newErrors.country = "Select your country";
    if (!terms) newErrors.terms = "You must accept the terms and conditions";
    if (!profilePicture)
      newErrors.profilePicture = "Profile picture is required";

    return newErrors;
  };
  // console.log(profilePicture)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    const getKeys = Object.keys(validationErrors);
    if (getKeys.length > 0) {
      return;
    }
    const userData = {
      fullname,
      email,
      password,
      age,
      gender,
      country,
      bio,
      dob,
      experience,
      favoriteColor,
      terms,
    };
    console.log(userData);

    const response = await fetch("https://example.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json()
    console.log(data)

  };
  return (
    <div>
      <h2>React Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            value={fullname}
            type="text"
            onChange={(e) => setFullname(e.target.value)}
          />
          {errors.fullname && <p style={{ color: "red" }}>{errors.fullname}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div>
          <label>Age</label>
          <input
            value={age}
            type="number"
            onChange={(evt) => setAge(evt.target.value)}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>
        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input
              value="Male"
              type="radio"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              value="Female"
              type="radio"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </fieldset>

        <div>
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Profile Picture</label>
          <input type="file" onChange={handleFile} />
          {errors.profilePicture && (
            <p style={{ color: "red" }}>{errors.profilePicture}</p>
          )}
        </div>
        <div>
          <label>Date of birth:</label>
          <input
            value={dob}
            type="date"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label>Experience (years)</label>
          <input
            value={experience}
            type="range"
            min="0"
            max="20"
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div>
          <label>Favorite color:</label>
          <input
            type="color"
            value={favoriteColor}
            onChange={(e) => setFavoriteColor(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            I agree to the terms & conditions
          </label>
          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
