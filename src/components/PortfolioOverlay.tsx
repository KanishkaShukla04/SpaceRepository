"use client";

export default function PortfolioOverlay({
  onExplore,
  enteredUniverse,
}: {
  onExplore: () => void;
  enteredUniverse: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: enteredUniverse ? 0 : 1,
        transition: "opacity 1.5s ease",
        pointerEvents: enteredUniverse ? "none" : "auto",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.jpg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75))",
          zIndex: 2,
        }}
      />

      {/* Hero Text */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Kanishka
        </h1>

        <h1
          style={{
            fontSize: "5rem",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Shukla
        </h1>

        <p
          style={{
            marginTop: 20,
            opacity: 0.8,
            letterSpacing: 2,
          }}
        >
          AI ENGINEER
        </p>
        <button
          onClick={onExplore}
          style={{
            marginTop: "30px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            padding: "12px 20px",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
        >
          EXPLORE MY UNIVERSE →
        </button>
      </div>
     <div
  style={{
    position: "absolute",
    right: "60px",
    bottom: "20px",
    transform: "translateY(-50%)",
    maxWidth: "260px",
    zIndex: 20,
  }}
>
  <div
    style={{
      border: "1px solid rgba(255,255,255,0.06)",
      padding: "18 px",
      backdropFilter: "blur(18px)",
      background: "rgba(0,0,0,0.25)",
    }}
  >
    <p
      style={{
        fontSize: "18px",
        color: "white",
        marginBottom: "12px",
        fontWeight: 300,
        lineHeight: 1.2,
      }}
    >
       ||Knowledge is Power||         

      ~ SCIENTIA POTENTIA EST 

    </p>

    <p
      style={{
        color: "#88CCFF",
        letterSpacing: "5px",
        fontSize: "12px",
        fontFamily: "Cormorant Garamond",
        fontStyle: "italic",
        opacity: 0.8,
      }}
    >
    </p>
  </div>
</div>
    </div>
  );
}