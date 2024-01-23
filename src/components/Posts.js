import React from "react";
import "./Post.css";
import Post from "./Post";



const Posts = () => {


    const blogPosts = [
        {
        title: "The Dark Side of Digital Age: Cyber Spying and Its Tools",
        body: ` 

        In the labyrinthine world of digital technology, where data is the new gold and safeguarding it is akin to a modern-day crusade, cyber spying has emerged as a chilling reality. This shadowy practice isn't just confined to rogue hackers in dimly lit basements; even governments and security companies are implicated, using sophisticated tools that blur the line between protection and invasion.
        
        Imagine an invisible intruder slipping into your device, unnoticed like a phantom. This is no ordinary trespasser but a piece of malicious malware or spyware installed by cybercriminals or even state-sponsored actors. It's akin to finding out that your home has been bugged - only this time, it's your digital abode under surveillance.
        
        One such notorious toolset was revealed in the leaked 'Ant Catalog' from the National Security Agency (NSA) around 2008. This catalog reads like an Orwellian nightmare with devices that could be straight out of a James Bond movie. 
        
        Among these tools is something known as a passive RF (Radio Frequency), retro ultra-high frequency reflector - tiny electronic devices requiring only microamps of power. They sit silently without radiating any RF energy, waiting for their cue like sleeper agents in enemy territory.
        
        Then there are audio-based RF retro-reflectors that provide room audio from targeted spaces using radar and basic post-processing. Imagine having an unseen ear in your room listening to every word you utter! To make this work, someone needs to send a focused beam of radio frequency energy targeted at that retro-reflector from some distance away – much like shining a spotlight on an actor on stage while sitting hidden amidst the audience.
        
        The chilling efficiency of these tools underscores how our private spaces have become porous in this digital age where boundaries are increasingly blurred. But awareness can be our first line of defense against such intrusions.
        
        It’s essential to keep your devices updated with the latest security patches and be cautious about the apps you install. Be wary of unsolicited emails or messages containing links, as these could be phishing attempts to install spyware on your device.
        
        Remember, in this digital age, vigilance is not just a virtue but a necessity. The battle against cyber spying is an ongoing one, and every user needs to be an active participant. It's like being part of a neighborhood watch - only this time, the neighborhood is online.
        
        So if you are alone in your room thinking you're indeed alone, remember there might be unseen ears listening. This isn't meant to scare you but to make you aware because awareness is the first step towards prevention.
        
        Share your thoughts below on how we can better protect ourselves in this digital age from such intrusions. Let's learn from each other because together we stand stronger against such invisible threats!
        
        To your safety,
        
        ,
        author: "Lawrie, Student CSU - Masters of Cyber Security",
        imgUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdcssproject.net%2Fwp-content%2Fuploads%2Fsites%2F24%2F2015%2F03%2F10_ANT.jpg&tbnid=B4NdqEi2Mmsh9M&vet=12ahUKEwjg65259vODAxVTrGMGHZBrDUcQMygKegQIARBh..i&imgrefurl=https%3A%2F%2Fdcssproject.net%2Fant-catalogue%2Findex.html&docid=feYJ7HsvrUSjYM&w=2267&h=493&q=ant%20catalogue%20nsa&ved=2ahUKEwjg65259vODAxVTrGMGHZBrDUcQMygKegQIARBh",
        },
        {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
        title: "Computer Network",
        body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];
    return (
        <div className="posts-container">
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
        ))}
        </div>
    );
    };
    export default Posts;