import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { avatar, react_img, html5_css3, material_ui } from './index'

const container = {
  width: '300px',
  height: '550px',
}

const div_elements = {
  margin: '20px'
}

const Experience = () => (
  <div className="experience">
    <div style={div_elements}>
      <Card
        style={container}
      >
        <CardHeader
          title="Thando"
          subtitle="Frontend web developer."
          avatar={avatar}
        />
        <CardMedia
          overlay={<CardTitle title="React.js" subtitle="A JavaScript Library For Building User Interfaces." />}
        >
          <img src={react_img} width='150' height='250' alt="React Image" />
        </CardMedia>
        <CardTitle title="Using React for Better" subtitle="FRONTEND APLICATIONS" />
        <CardText>
        The frontend is the forward facing portion of your web application. It is usually the first point of contact the user has with your business. Developing a good front end that is visually appealing and easy to use will encourage users to keep coming back.
        </CardText>
      </Card>
    </div>

    {/* ----------------------------------
    // The Next Card is for CSS3
     ----------------------------------*/}
     <div style={div_elements}>
        <Card
          style={container}
        >
          <CardHeader
            title="Thando"
            subtitle="Frontend web developer."
            avatar={avatar}
          />
          <CardMedia
            overlay={<CardTitle title="HTML5 & CSS3" subtitle="A JavaScript Library For Building User Interfaces." />}
          >
            <img src={html5_css3} width='150' height='250' alt="React Image" />
          </CardMedia>
          <CardTitle title="Structure the Web." subtitle="FRONTEND APLICATIONS" />
          <CardText>
          The frontend is the forward facing portion of your web application. It is usually the first point of contact the user has with your business. Developing a good front end that is visually appealing and easy to use will encourage users to keep coming back.
          </CardText>
        </Card>
      </div>

      {/* ----------------------------------
      // The Next Card is for material-ui
       ----------------------------------*/}
       <div style={div_elements}>
          <Card
            style={container}
          >
            <CardHeader
              title="Thando"
              subtitle="Frontend web developer."
              avatar={avatar}
            />
            <CardMedia
              overlay={<CardTitle title="Material UI" subtitle="A Frontend Library For Building Components." />}
            >
              <img src={material_ui} width='150' height='250' alt="React Image" />
            </CardMedia>
            <CardTitle title="Create The Best UI" subtitle="FRONTEND APLICATIONS" />
            <CardText>
            The frontend is the forward facing portion of your web application. It is usually the first point of contact the user has with your business. Developing a good front end that is visually appealing and easy to use will encourage users to keep coming back.
            </CardText>
          </Card>
        </div>
  </div>
);

export default Experience;
