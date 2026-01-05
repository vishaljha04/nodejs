# Node js architecture

User :- who intended request for particular task

Events:- intended task by user to done by node js system

Events queue:- queuing requests (user requests) 

Events loop :- Events loop continue monitoring or watching the queue for requests/events and pick the one events in FIFO way and execute the operation 

Requests --> blocking requests---> blocked due to their nature and not execute directly it is executed using thread pools 

---

--> non blocking requests --> asynchronus operations 

Thread pools :--> pools of multiple threads for executing the blocking/synchronus operations 

default thread pool size :- 4
max size of the thread pools can be :- max cpu core == thread pools 
we can see the total threads using the os module in nodejs 
os.cpu().lenght //cpu thread size