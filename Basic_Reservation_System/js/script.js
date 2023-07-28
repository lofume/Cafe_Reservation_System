const emp = {
        MrsK: './employeeprofiles/mrskinfo.html'
        ,Ralph: './employeeprofiles/ralphinfo.html'
        ,Trudy: './employeeprofiles/trudyinfo.html'
        ,Karen: './employeeprofiles/kareninfo.html'
        ,Fredrik: './employeeprofiles/fredrikinfo.html'
    }
    document.getElementById('submit').addEventListener('click', () =>
    location.href = emp[document.getElementById('chooseEmp').value])



