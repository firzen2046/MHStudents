import Home from './pages/Home';
import Activities from './pages/Activities';
import Registration from './pages/Registration';
import StudyInfo from './pages/StudyInfo';
import CantoneseLearn from './pages/CantoneseLearn';
import Exchange from './pages/Exchange';
import HKPlaces from './pages/HKPlaces';
import MainlandUni from './pages/MainlandUni';
import Subjects from './pages/Subjects';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Activities": Activities,
    "Registration": Registration,
    "StudyInfo": StudyInfo,
    "CantoneseLearn": CantoneseLearn,
    "Exchange": Exchange,
    "HKPlaces": HKPlaces,
    "MainlandUni": MainlandUni,
    "Subjects": Subjects,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};