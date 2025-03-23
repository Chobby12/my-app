import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import { colors, spacing, typography, borderRadius } from "../styles/theme";

const Settings: React.FC = () => {
  const { currentUser } = useAuth();
  

  // CSS classes for the switch component
  const switchStyles = `
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${colors.gray};
      border-radius: 34px;
      transition: 0.4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${colors.white};
      border-radius: 50%;
      transition: 0.4s;
    }
    
    input:checked + .slider {
      background-color: ${colors.admin};
    }
    
    input:checked + .slider:before {
      transform: translateX(26px);
    }
  `;

  return (
    <div>
      <style>{switchStyles}</style>
      <Navbar />
      <div className="container">
        <Card>
            <ul style={{display: "grid", gap: "10px"}}> 
                <li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Blog Apperance <Button style={{background: "dodgerblue"}}><span>Open</span></Button></li>

<li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Verify Posts <Button><span>Open</span></Button></li>

<li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Admins <Button><span>View</span></Button></li>

<li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Editors <Button><span>View</span></Button></li>

<li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Posts <Button><span>View</span></Button></li>

<li style={{
                    display: "flex", justifyContent: "space-between", alignContent: "center"
                }}>Sales <Button><span>Edit</span></Button></li>
            </ul>
        </Card>
       </div>
    </div>
  );
};

export default Settings;