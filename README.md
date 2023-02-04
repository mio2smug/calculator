Calculator project @The Odin Project
Version 0.9 

The way this calculator works is as following.
-Every numerical button pushes the corresponding number as a string into an array using the array.push() method, calls a type conversion function that determines whether userInput is int or float, then displays that number.
-When user presses enter, that userInput is stored internally as first operator, array cleared and userInput is deleted, internal counter raises so calculator initial behavior isnt repeated
-User then presses an operator, calculator displays it as user input, and sets symbol as corresponding operator
-User then enters a second operator, presses enter
-enter function behavior sets second user input as our secondary operand, evaluates, returns result, sets total as our initial operator, then wipes the current user input to make room for a new one in case user wants to chain a series of mathematical problems.

Unintended consequences:
Program is very verbose. Can definitely be shortened.
Program only works with the following order: [input] enter operator [input] enter operator [input] enter operator [input]...

pros:
Since program does type conversion to num on the spot, double negatives or double decimals are ruled out immediately
No need to wrap total as any number that is too large is displayed in scientific notation 

Next update:
-Typing this out I've noticed how to potentially fix the specific order problem. If  [userInput] operator [userInput] operator we could set the first action of the operator onClick function to call the enter function so we may have:

        [userInput]  *enter called by operator* operator [userInput]...
        