$(document).ready(function () {
    console.log("确认")

    $('#registerForm').on('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        console.log("进入")
        // 用户名验证
        const username = $('#username').val();
        if (username === '') {
            isValid = false;
            $('#usernameError').text('用户名不能为空').show();
        } else if (username.length < 3 || username.length > 15) {
            isValid = false;
            $('#usernameError').text('用户名长度应在3到15个字符之间').show();
        } else {
            $('#usernameError').hide();
        }

        // 邮箱验证
        const email = $('#email').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            isValid = false;
            $('#emailError').text('邮箱不能为空').show();
        } else if (!emailPattern.test(email)) {
            isValid = false;
            $('#emailError').text('邮箱格式不正确').show();
        } else {
            $('#emailError').hide();
        }

        // 密码验证
        const password = $('#password').val();
        if (password === '') {
            isValid = false;
            $('#passwordError').text('密码不能为空').show();
        } else if (password.length < 6) {
            isValid = false;
            $('#passwordError').text('密码长度应至少为6个字符').show();
        } else {
            $('#passwordError').hide();
        }

        // 确认密码验证
        const confirmPassword = $('#confirmPassword').val();
        if (confirmPassword === '') {
            isValid = false;
            $('#confirmPasswordError').text('请确认密码').show();
        } else if (confirmPassword !== password) {
            isValid = false;
            $('#confirmPasswordError').text('密码不匹配').show();
        } else {
            $('#confirmPasswordError').hide();
        }

        if (isValid) {
            alert('注册成功');
            // 提交表单
        }
    });
});
