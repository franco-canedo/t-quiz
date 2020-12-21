import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Sonnet from 'react-bootstrap/Sonnet';

import { useDispatch } from 'react-redux';
import { chooseTopic } from '../actions';
import { topicSelect } from '../actions';

import useSound from 'use-sound';
import beep from '../sounds/beep.mp3';

const TopicList = (props) => {

    const [menuClassName, setMenuClassName] = useState('topicMenuIn');
    const [topics, setTopics] = useState(['Film', 'Music', 'Television', 'General Knowledge']);
    const dispatch = useDispatch();
    const [play] = useSound(beep);

    const slideOut = (topic) => {
        setMenuClassName('topicMenuOut');
        dispatch(chooseTopic(topic));
        dispatch(topicSelect());
    }

    return (

        <div className={menuClassName}>
            <h1>Choose a Topic</h1>
            <div className="topicOptions">


                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {
                                    topics.map((topic, index)=> {
                                        return <ListGroup.Item onClick={() => {
                                            slideOut(topic);
                                            play();
                                        }}
                                        action variant="dark"
                                        key={index}>
                                            <h4>{topic}</h4>
                                        </ListGroup.Item>
                                    })
                                }
                            </ListGroup>
                            
                            
                        </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    {/* <Tab.Pane eventKey="#link1">
                            <Sonnet />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <Sonnet />
                        </Tab.Pane> */}
                                </Tab.Content>
                            </Col>
                    </Row>
                </Tab.Container>
            </div>
            </div>

    );
}

export default TopicList;