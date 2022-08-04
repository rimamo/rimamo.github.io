var app = angular.module("personalPage", []);

app.controller("main", function ($scope, $interval, $http) {
    $scope.firstName = "Ricardo";
    $scope.lastName = "Martínez Montes";

    $scope.selected = 'masterCamping';
    $scope.items = {
        mastercamping: {
            enabled: true,
            title: 'Arquitecto de software',
            desc: 'Análisis y desarrollo de una nueva infraestructura basada en “Full Stack Javascript” para migrar una aplicación de reservas.'
        },
        regateame: {
            enabled: false,
            title: 'CTO and Founder',
            desc: 'Gestión del proyecto, del equipo, de infraestructura, análisis/desarrollo lógica funcional de la aplicación y del entorno. Todo lo que conlleva el desarrollo de una aplicación multiplataforma desde inicios hasta su lanzamiento y posterior seguimiento.'
        },
        vass: {
            enabled: false,
            title: 'Analista Programador / Consultor de manejo de contenido',
            desc: 'Análisis, implementación y migración de la antigua infraestructura a OpenCMS, de todos lo contenidos de los portátiles de la Generalitat de Cataluña. Especial deificación, gestión, análisis y desarrollo de los portales relacionados con el departamento de Salut. En el cual llevaba a cabo el estudio, desarrollo, gestión de equipo, en colaboración con HP para desarrollar el canal de SALUT.'
        },
        indian: {
            enabled: false,
            title: 'WebMaster',
            desc: 'Crear el diseño, la estructura y la programación de sitios web, así como el mantenimiento y las actualizaciones del mismo, las cuales para que la página tenga las condiciones necesarias para un buen funcionamiento.'
        },
        scc: {
            enabled: false,
            title: 'Técnico de servicios gestionados',
            desc: 'Control continúo de infraestructuras informáticas. Actuaciones siguiendo procedimientos para resolver los problemas. También se actualiza la plataforma constantemente: insertando nuevos equipos en la monitorización, creando scripts de verificación de estado, tanto de hardware como software, realización de informes sobre el estado de la plataforma, etc.'
        },
        others: {
            enabled: false,
            title: 'Otros trabajos relacionados con la programación y sistemas',
            desc: ''
        }
    };

    $scope.skills = {
        mongo: {
            learned: 50,
            title: 'MongoDB',
            url: 'https://www.mongodb.com/',
            icon: 'icons/mongodb.jpg'
        },
        express: {
            learned: 70,
            title: 'expressJS',
            url: 'https://www.mongodb.com/',
            icon: 'icons/Express.png'
        },
        angular: {
            learned: 80,
            title: 'AngularJS',
            url: 'https://angularjs.org/',
            icon: 'icons/angularjs.png'
        },
        nodejs: {
            learned: 60,
            title: 'nodeJS',
            url: 'https://nodejs.org/',
            icon: 'icons/nodejs.png'
        },
        linux: {
            learned: 60,
            title: 'Linux',
            url: 'https://www.linux.com/',
            icon: 'icons/linux.png'
        },
        socketio: {
            learned: 80,
            title: 'http://socket.io/',
            url: 'socket.io',
            icon: 'icons/socket.io.png'
        },
        git: {
            learned: 60,
            title: 'git',
            url: 'https://git-scm.com/',
            icon: 'icons/git.png'
        },
        jade: {
            learned: 50,
            title: 'jade',
            url: 'https://pugjs.org/api/getting-started.html',
            icon: 'icons/jade.svg'
        },
        mysql: {
            learned: 60,
            title: 'MySQL',
            url: 'https://www.mysql.com/',
            icon: 'icons/mysql.png'
        },
        redis: {
            learned: 30,
            title: 'redis',
            url: 'http://redis.io/',
            icon: 'icons/redis.png'
        },
        elastic: {
            learned: 30,
            title: 'TITLE',
            url: 'https://www.elastic.co/',
            icon: 'icons/elasticsearch.png'
        },
        nginx: {
            learned: 60,
            title: 'nginx',
            url: 'https://nginx.org/',
            icon: 'icons/nginx.png'
        }
    };
    $scope.skillsKeys = Object.keys($scope.skills);

    $scope.openUrl = function (url) {
        window.open(url, '_blank');
    };

    $scope.getTitle = function () {
        return $scope.items[$scope.selected].title;
    };

    $scope.getDesc = function () {
        return $scope.items[$scope.selected].desc;
    };

    $scope.selected = 'mastercamping';
    $scope.position = 0;
    $scope.itemsKeys = Object.keys($scope.items);

    var interval;

    $scope.start = function () {
        interval = $interval(function () {
            $scope.items[$scope.selected].enabled = false;
            if ($scope.position === $scope.itemsKeys.length - 1) {
                $scope.position = 0;
            } else {
                $scope.position++;
            }
            $scope.selected = $scope.itemsKeys[$scope.position];
            $scope.items[$scope.selected].enabled = true;
        }, 5000);
    };

    $scope.stop = function (itemHover) {
        $scope.items[$scope.selected].enabled = false;
        if (angular.isDefined(interval)) {
            $interval.cancel(interval);
            interval = undefined;
        }
        $scope.selected = itemHover;
        $scope.position = $scope.itemsKeys.indexOf(itemHover);
        $scope.items[$scope.selected].enabled = true;
    };

    $scope.start();

    $scope.sender = {};

    $scope.sendMail = function() {
        $http.post('/api/send', $scope.sender)
            .success(function(res){
                $scope.mailSended = res.sended;
            });
    }

});