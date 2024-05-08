import PropTypes from "prop-types";
import { Sidebar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {
  PiBookOpenText,
  PiBookOpenTextFill,
  PiCalendarCheck,
  PiCalendarCheckFill,
  PiCaretLeft,
  PiCaretRight,
  PiChartBar,
  PiChartBarFill,
  PiSquaresFour,
  PiSquaresFourFill,
  PiUserCircle,
  PiUsers,
  PiUserCircleFill,
} from "react-icons/pi";

const SidebarUI = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return isOpen ? (
    <Sidebar className="fixed top-0 left-0 z-40 w-56 h-screen transition-all duration-200 ease-in-out -translate-x-full border-r border-gray-200 md:translate-x-0">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className="text-gray-900 d hover:text-amber-500 hover:bg-gray-50 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <PiCaretLeft className="ml-auto text-2xl " />
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to="/"
            icon={location.pathname !== "/" ? PiSquaresFour : PiSquaresFourFill}
            active={location.pathname === "/"}
            className={`hover:bg-slate-200 hover:text-gray-500 ${
              location.pathname === "/" &&
              "bg-amber-200 text-gray-700 font-medium"
            }`}
          >
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse icon={PiUsers} label="Murid">
            <Sidebar.Item
              as={Link}
              to="/absensi"
              icon={
                location.pathname !== "/absensi"
                  ? PiCalendarCheck
                  : PiCalendarCheckFill
              }
              active={location.pathname === "/absensi"}
              className={`hover:bg-slate-200 hover:text-gray-500 ${
                location.pathname === "/absensi" &&
                "bg-amber-200 text-gray-700 font-medium"
              }`}
            >
              Absensi
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/nilai"
              icon={
                location.pathname !== "/nilai" ? PiChartBar : PiChartBarFill
              }
              active={location.pathname === "/nilai"}
              className={`hover:bg-slate-200 hover:text-gray-500 ${
                location.pathname === "/nilai" &&
                "bg-amber-200 text-gray-700 font-medium"
              }`}
            >
              Nilai
            </Sidebar.Item>
            <Sidebar.Item
              as={Link}
              to="/rapor"
              icon={
                location.pathname !== "/rapor"
                  ? PiBookOpenText
                  : PiBookOpenTextFill
              }
              active={location.pathname === "/rapor"}
              className={`hover:bg-slate-200 hover:text-gray-500 ${
                location.pathname === "/rapor" &&
                "bg-amber-200 text-gray-700 font-medium"
              }`}
            >
              Rapor
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            as={Link}
            to="/profile"
            icon={
              location.pathname !== "/profile" ? PiUserCircle : PiUserCircleFill
            }
            active={location.pathname === "/profile"}
            className={`hover:bg-slate-200 hover:text-gray-500 ${
              location.pathname === "/profile" &&
              "bg-amber-200 text-gray-700 font-medium"
            }`}
          >
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="fixed bottom-0">
          <Sidebar.Item className="mx-auto text-sm text-center text-gray-500">
            Created by kelompok 2
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  ) : (
    <Sidebar className="fixed top-0 left-0 z-40 w-12 h-screen transition-all duration-200 ease-in-out -translate-x-full border-r border-gray-200 md:translate-x-0">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className="text-gray-900 d hover:text-amber-500 hover:bg-gray-50 hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <PiCaretRight className="text-2xl" />
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

SidebarUI.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default SidebarUI;