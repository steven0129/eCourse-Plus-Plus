import Vue from 'vue'
import Router from 'vue-router'
import Ecourse from '@/components/App'
import Course from '@/components/Course'
import CourseMain from '@/components/CourseMain'
import CourseTable from '@/components/CourseTable'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'Ecourse',
        component: Ecourse,
        children: [{
            name: 'Course',
            path: '/course',
            component: CourseMain
        }, {
            path: '/course/:id',
            component: Course
        }, {
            name: 'table',
            path: '/timeTable',
            component: CourseTable
        }]
    }, {
        path: '/*',
        redirect: '/'
    }]
})
