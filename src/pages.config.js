import Activities from './pages/Activities';
import AdmissionPathways from './pages/AdmissionPathways';
import CantoneseLearn from './pages/CantoneseLearn';
import Exchange from './pages/Exchange';
import HKPlaces from './pages/HKPlaces';
import Home from './pages/Home';
import LivingInfo from './pages/LivingInfo';
import MainlandUni from './pages/MainlandUni';
import MainlandUniDatabase from './pages/MainlandUniDatabase';
import Registration from './pages/Registration';
import Scholarships from './pages/Scholarships';
import StudyInfo from './pages/StudyInfo';
import Subjects from './pages/Subjects';
import SupportOrganizations from './pages/SupportOrganizations';
import StudyPlanner from './pages/StudyPlanner';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "AdmissionPathways": AdmissionPathways,
    "CantoneseLearn": CantoneseLearn,
    "Exchange": Exchange,
    "HKPlaces": HKPlaces,
    "Home": Home,
    "LivingInfo": LivingInfo,
    "MainlandUni": MainlandUni,
    "MainlandUniDatabase": MainlandUniDatabase,
    "Registration": Registration,
    "Scholarships": Scholarships,
    "StudyInfo": StudyInfo,
    "Subjects": Subjects,
    "SupportOrganizations": SupportOrganizations,
    "StudyPlanner": StudyPlanner,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};