#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;
    

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/login/login.component.spec.ts;
    else
        echo "FE_loginTest FAILED";
    fi 

    # checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/signup/signup.component.spec.ts;
    else
        echo "FE_signupTest FAILED";
    fi 

    # checking for addevents component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/addevents" ]
    then
        cp /home/coder/project/workspace/karma/addevents.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/addevents/addevents.component.spec.ts;
    else
        echo "FE_addEventsTest FAILED";
    fi 

     # checking for adminhomepage component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminhomepage" ]
    then
        cp /home/coder/project/workspace/karma/adminhomepage.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminhomepage/adminhomepage.component.spec.ts;
    else
        echo "FE_adminHomePageTest FAILED";
    fi

        # checking for booking component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/booking" ]
    then
        cp /home/coder/project/workspace/karma/booking.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/booking/booking.component.spec.ts;
    else
        echo "FE_bookingTest FAILED";
    fi

    
    # checking for applyform component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/organizeside/applyform" ]
    then
        cp /home/coder/project/workspace/karma/applyform.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/organizeside/applyform/applyform.component.spec.ts;
    else
        echo "FE_applyFormTest FAILED";
    fi 

    # checking for bookevent component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/organizeside/bookevent" ]
    then
        cp /home/coder/project/workspace/karma/bookevent.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/organizeside/bookevent/bookevent.component.spec.ts;
    else
        echo "FE_bookEventTest FAILED";
    fi 


    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
    echo "FE_loginTest FAILED";
    echo "FE_signupTest FAILED";
    echo "FE_addEventsTest FAILED";
    echo "FE_adminHomePageTest FAILED";
    echo "FE_bookingTest FAILED";
    echo "FE_applyFormTest FAILED";
    echo "FE_bookEventTest FAILED";
fi

