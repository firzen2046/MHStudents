import Activities from './pages/Activities';
import ArrivalChecklist from './pages/ArrivalChecklist';
import Banking from './pages/Banking';
import Business from './pages/Business';
import CantoneseLearn from './pages/CantoneseLearn';
import Community from './pages/Community';
import Education from './pages/Education';
import Exchange from './pages/Exchange';
import HKPlaces from './pages/HKPlaces';
import Home from './pages/Home';
import Housing from './pages/Housing';
import InteractiveMap from './pages/InteractiveMap';
import JobSearch from './pages/JobSearch';
import LivingInfo from './pages/LivingInfo';
import PeerMatch from './pages/PeerMatch';
import PreLandingHousing from './pages/PreLandingHousing';
import PreArrivalQA from './pages/PreArrivalQA';
import QADetail from './pages/QADetail';
import Registration from './pages/Registration';
import SupportOrganizations from './pages/SupportOrganizations';
import VisaPolicy from './pages/VisaPolicy';
import Transport from './pages/Transport';
import Food from './pages/Food';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "ArrivalChecklist": ArrivalChecklist,
    "Banking": Banking,
    "Business": Business,
    "CantoneseLearn": CantoneseLearn,
    "Community": Community,
    "Education": Education,
    "Exchange": Exchange,
    "HKPlaces": HKPlaces,
    "Home": Home,
    "Housing": Housing,
    "InteractiveMap": InteractiveMap,
    "JobSearch": JobSearch,
    "LivingInfo": LivingInfo,
    "PeerMatch": PeerMatch,
    "PreLandingHousing": PreLandingHousing,
    "PreArrivalQA": PreArrivalQA,
    "QADetail": QADetail,
    "Registration": Registration,
    "SupportOrganizations": SupportOrganizations,
    "VisaPolicy": VisaPolicy,
    "Transport": Transport,
    "Food": Food,
    "Forum": Forum,
    "Profile": Profile,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};