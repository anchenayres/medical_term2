import React from "react";



const Appointments = () => {

    return (
    <>

    <div className="today-appointments">
        <div className="heading">
            <h12>Today's Appointments</h12>
           
            
            <ul className="client-app1">
                <li><b>Mrs. Lay </b></li>
                <li>11:45 PM </li>
                <li>Dr. Manley</li>
            </ul>
            <ul className="client-app2">
                <li><b>Mrs. Charnel </b></li>
                <li>15:30 PM</li>
                <li>Dr. Manley</li>
            </ul>
            <ul className="client-app3">
                <li><b>Mrs. Staden </b></li>
                <li>17:00 PM</li>
                <li>Dr. Manley</li>
            </ul>
            <ul className="client-app4">
                <li><b>Mrs. Ley </b></li>
                <li>19:15 PM</li>
                <li>Dr. Chew</li>
            </ul>
            <h13>4</h13>
        </div>
    </div>

    <div className="month-balance">
        <div className="heading">
            <h12>This Month</h12>
        </div>
    </div>

    <div className="calendar">
        <div className="cal-heading">
            <h11>April 2022</h11>
            <div className="right-arrow"></div>
            <div className="left-arrow"></div>
        </div>
        <ul className="week">
            <li>Mon</li>
            <li>Tues</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
        </ul>
        <ul className="mon">
            <li>4</li>
            <li>11</li>
            <li>18</li>
            <li>25</li>
        </ul>
        <ul className="tue">
            <li>5</li>
            <li>12</li>
            <li>19</li>
            <li>26</li>
        </ul>
        <ul className="wed">
            <li>6</li>
            <li>13</li>
            <li>20</li>
            <li>27</li>
        </ul>
        <ul className="thu">
            <li>7</li>
            <li>14</li>
            <li>21</li>
            <li>28</li>
        </ul>
        <ul className="fri">
            <li>1</li>
            <li>8</li>
            <li>15</li>
            <li>22</li>
            <li>29</li>
        </ul>
        <ul className="sat">
            <li>2</li>
            <li>9</li>
            <li>16</li>
            <li>23</li>
            <li>30</li>
        </ul>
        <ul className="sun">
            <li>3</li>
            <li>10</li>
            <li>17</li>
            <li>24</li>
        </ul>
    </div>



    <div className="headings">
    <h3>Upcoming Appointments</h3>

    <h4>Patient Name</h4>
    <h5>Age</h5>
    <h6>Email</h6>
    <h7>Number</h7>
    <h8>Docter</h8>
    <h9>Room</h9>
    <h10>Date and Time</h10>
    </div>

    <div className="doc-table">
        <div className="left">
            <div className="pat-image"></div>
            <p2>Jessie Ley<br />Female</p2>
        </div>
        <div className="doc-age">
        <p1>42</p1>
        </div>
        <div className="doc-email">
        <p1>jessie@gmail.com</p1>
        </div>
        <div className="doc-password">
        <p1>0824588967</p1>
        </div>
        <div className="doc-num">
        <p1>Dr. Manley</p1>
        </div>
        <div className="doc-id">
        <p1>Floor 3A7</p1>
        </div>
        <div className="doc-room">
        <p1>09 Apr 2022 | 11:45 AM</p1>
        </div>
        </div>
    
   

      
    </>
    )

    






};

export default Appointments;

//doctors who are on leave
//total patients
//staff members
//upcoming and past treatments
