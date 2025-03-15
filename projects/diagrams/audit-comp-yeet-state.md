stateDiagram
    [*] --> RoundStarted
    RoundStarted --> BootstrapPhase
    BootstrapPhase --> GamePhase
    GamePhase --> RoundFinished
    RoundFinished --> CoolDown
    CoolDown --> RoundStarted
    note right of CoolDown : endOfYeetTime + COOLDOWN_TIME