import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skill.class} style={{ fontSize: "220%" }}></i>
                <p
                  className="text-center"
                  style={{ fontSize: "55%", marginTop: "4px" }}
                >
                  {skill.name}
                </p>
              </div>
            </span>
          </li>
        );
      });
    }
    if (this.props.sharedDesignSkills && this.props.resumeBasicInfo) {
      var designSection = this.props.resumeBasicInfo.section_name.designskills;
      var designSkills = this.props.sharedDesignSkills.icons.map(function (designSkill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={designSkill.class} style={{ fontSize: "220%" }}></i>
                <p
                  className="text-center"
                  style={{ fontSize: "55%", marginTop: "4px" }}
                >
                  {designSkill.name}
                </p>
              </div>
            </span>
          </li>
        );
      });
    }
    

    return (
      <section id="skills">
        {sectionName && skills && (
          <div className="col-md-12 mb-5">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
            <div className="text-center">
              <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            </div>
          </div>
        )}
    
        {designSection && designSkills && (
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{designSection}</span>
            </h1>
            <div className="text-center">
              <ul className="list-inline mx-auto skill-icon">{designSkills}</ul>
            </div>
          </div>
        )}
      </section>
    );
    
  }
}

export default Skills;
