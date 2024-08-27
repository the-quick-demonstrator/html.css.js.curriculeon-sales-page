class Configuration {
    enableEnrollmentRedirect() {
        document.getElementById('enroll-button').addEventListener('click', function() {
            document.getElementById('ezuz1x').click();
        });
    }


    enableHideableSkillListJquery() {
        $(document).ready(function(){
            $('.reveal-button').click(function(){
                $('.skills-list').slideToggle();
            });
        });
    }

    enableHideableSkillList() {
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.reveal-button').addEventListener('click', function() {
                var skillsList = document.querySelector('.skills-list');
                if (skillsList.style.display === 'none' || skillsList.style.display === '') {
                    skillsList.style.display = 'block';
                } else {
                    skillsList.style.display = 'none';
                }
            });
        });
    }
}

const configuration = new Configuration();
configuration.enableEnrollmentRedirect();
configuration.enableHideableSkillListJquery();