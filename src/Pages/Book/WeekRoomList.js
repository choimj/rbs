import React from "react";
import styled from "styled-components";

const Root = styled.div`
  clear: both;
  text-align: left;
  padding-top: 5px;
  & > ul > li {
    background-color: #ffffff;
  }

  & > ul > li > span:first-child {
    background-color: #1C90FB;    
    display: block;     
    color: #ffffff;
    border: none;        
    font-size: 15px;
    width:15%;
    text-align: center;
    float: left;
    padding: 8px 0;
  }
  & > ul > li > span {
    border: 1px solid #cfd3dc;
    display: block;
    width: 80%;
    height: 100%;  
    border-radius: 20px / 20px;
    float: left;
  }
`;
const TimeBlock = styled.div`  
  position: relative;
  width: 40px;
  height: 20px;
  display: inline-block;
  margin: 5px;
  
  &:first-child {
    margin-left: 15px;
  }
  & > p > span {
    width: 20px;
    height: 20px;
    border: 1px solid #cfd3dc;
    display: inline-block;
    cursor: pointer;
  }
  & > p:last-child {    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 3px;
    font-size: 13px;
  }
  
`;

class WeekRoomList extends React.Component {
  state = {
    curTime: null
  }

  render() {
    setInterval(function(){this.setState({curTime: new  Date().toLocaleString()});}.bind(this), 1000);
   
    return (
      <Root>
        <ul>
          <li>         
              <span>2019-08-19</span>
              <span>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>9</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>10</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>11</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>12</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>13</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>14</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>15</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>16</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>17</p>     
                </TimeBlock>
                <TimeBlock>
                  <p>
                    <span></span> 
                    <span></span>                   
                  </p>       
                  <p>18</p>     
                </TimeBlock>
              </span>         
          </li>
        </ul>
      </Root>
    );
  }


}

export default WeekRoomList;