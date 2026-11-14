import { Link } from "react-router-dom";
import { BionicText } from "../components/BionicText";
import { useBionicText } from "../hooks/useBionicText";

export default function ProfilePage() {
  const { isBionicActive } = useBionicText();

  return (
    <div className="container py-5" style={{ maxWidth: "960px" }}>
      <h1 className="fw-bold mb-4">My Profile</h1>

      {/* Profile Card */}
      <section className="card border border-dark p-4 mb-4">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div
            className="d-flex align-items-center justify-content-center border border-2 border-dashed border-dark rounded-circle flex-shrink-0"
            style={{ width: "96px", height: "96px" }}
            aria-label="Profile photo placeholder"
          >
            <span style={{ fontSize: "2rem" }}>👤</span>
          </div>

          <div className="flex-grow-1">
            <h2 className="h5 fw-bold mb-1">Your name</h2>
            <p className="font-monospace small text-secondary mb-1">@username</p>
            <BionicText
              isActive={isBionicActive}
              className="font-monospace small text-secondary d-block"
              text="Add a short bio to tell the community about yourself."
            />
          </div>

          <button className="btn btn-outline-dark font-monospace small text-uppercase" type="button">
            Edit profile
          </button>
        </div>
      </section>

      {/* Favorite Champions Panel */}
      <section className="card border border-dark mb-4 overflow-hidden">
        <div className="border-bottom border-dark px-4 py-3">
          <h3 className="h6 fw-bold mb-0 font-monospace">Favorite champions</h3>
        </div>
        <div className="p-4">
          <BionicText
            isActive={isBionicActive}
            className="font-monospace small text-secondary d-block"
            text="Your followed champions will appear here."
          />
        </div>
      </section>

      {/* Recent Activity Panel */}
      <section className="card border border-dark mb-4 overflow-hidden">
        <div className="border-bottom border-dark px-4 py-3">
          <h3 className="h6 fw-bold mb-0 font-monospace">Recent activity</h3>
        </div>
        <div className="p-4">
          <BionicText
            isActive={isBionicActive}
            className="font-monospace small text-secondary d-block"
            text="Your saved articles and recent activity will appear here."
          />
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-dark font-monospace small text-uppercase">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
}