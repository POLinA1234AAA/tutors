import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/LoginSlice';

import registerReducer from "../features/RegisterSlice";
// import schoolReducer from "../features/SchoolSlice";
// import plannedLessonReducer from "../features/PlannedLessonSlice";
// import lessonReducer from "../features/LessonSlice";


export default configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        // school:schoolReducer,
        // plannedLesson:plannedLessonReducer,
        // lesson:lessonReducer
    },
});