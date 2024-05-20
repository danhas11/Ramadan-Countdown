const dateTimeElement = document.getElementById('date-time');
        const countdownElement = document.getElementById('countdown');
    
        // Update date and time every second
        setInterval(() => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
            const dateTimeString = now.toLocaleDateString('en-US', options);
            dateTimeElement.textContent = dateTimeString;
            
            // Calculate countdown to Ramadan
            const ramadanStartThisYear = new Date(now.getFullYear(), 3, 2); // Ramadan usually starts on the 1st day of Ramadan (Islamic month), which is on the 2nd day in the Gregorian calendar
            const ramadanStartNextYear = new Date(now.getFullYear() + 1, 3, 2); // If Ramadan has already passed this year, then it starts next year on the same day
            
            let ramadanStart;
            if (now < ramadanStartThisYear) {
                ramadanStart = ramadanStartThisYear;
            } else {
                ramadanStart = ramadanStartNextYear;
            }
    
            const millisecondsToRamadan = ramadanStart.getTime() - now.getTime();
            const daysToRamadan = Math.floor(millisecondsToRamadan / (1000 * 60 * 60 * 24));
            const hoursToRamadan = Math.floor((millisecondsToRamadan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesToRamadan = Math.floor((millisecondsToRamadan % (1000 * 60 * 60)) / (1000 * 60));
            const secondsToRamadan = Math.floor((millisecondsToRamadan % (1000 * 60)) / 1000);
    
            countdownElement.textContent = `${daysToRamadan} days ${hoursToRamadan} hours ${minutesToRamadan} minutes ${secondsToRamadan} seconds`;
        }, 1000);
