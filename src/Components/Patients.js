import React from "react";


const Patients = () => {

    return (
    <>

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
    <h3>Current Patients</h3>

    <h4>Name</h4>
    <h5>Age</h5>
    <h6>Email</h6>
    <h7>Password</h7>
    <h8>Number</h8>
    <h9>Id</h9>
    <h10>Room</h10>
    </div>
    <div className="doc-table">
        <div className="left">
            <div className="pat-image"></div>
            <p2>Jason Manley<br />Male</p2>
        </div>
        <div className="doc-age">
        <p1>48</p1>
        </div>
        <div className="doc-email">
        <p1>drmanley@gmail.com</p1>
        </div>
        <div className="doc-password">
        <p1>manelymann</p1>
        </div>
        <div className="doc-num">
        <p1>0827855558</p1>
        </div>
        <div className="doc-id">
        <p1>0509720045263</p1>
        </div>
        <div className="doc-room">
        <p1>Floor 3A7</p1>
        </div>
        </div>
    </>
    )

    






};

export default Patients;