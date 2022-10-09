import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../contextCalendar/GlobalContext";
import EventModal from "./EventModal";
import App from "../App";

function CalendarMain() {

  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>

 
    </React.Fragment>
  );
}

export default CalendarMain;
