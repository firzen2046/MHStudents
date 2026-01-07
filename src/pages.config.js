import Activities from './pages/Activities';
import CantoneseLearn from './pages/CantoneseLearn';
import Exchange from './pages/Exchange';
import HKPlaces from './pages/HKPlaces';
import Home from './pages/Home';
import MainlandUni from './pages/MainlandUni';
import Registration from './pages/Registration';
import StudyInfo from './pages/StudyInfo';
import Subjects from './pages/Subjects';
import MainlandUniDatabase from './pages/MainlandUniDatabase';
import AdmissionPathways from './pages/AdmissionPathways';
import Scholarships from './pages/Scholarships';
import SupportOrganizations from './pages/SupportOrganizations';
import LivingInfo from './pages/LivingInfo';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "CantoneseLearn": CantoneseLearn,
    "Exchange": Exchange,
    "HKPlaces": HKPlaces,
    "Home": Home,
    "MainlandUni": MainlandUni,
    "Registration": Registration,
    "StudyInfo": StudyInfo,
    "Subjects": Subjects,
    "MainlandUniDatabase": MainlandUniDatabase,
    "AdmissionPathways": AdmissionPathways,
    "Scholarships": Scholarships,
    "SupportOrganizations": SupportOrganizations,
    "LivingInfo": LivingInfo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};