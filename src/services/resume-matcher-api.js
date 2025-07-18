const API_URL = import.meta.env.VITE_API_BASE_URL;

// return parsed resume with grouped entities
export async function uploadResume(formData) {
    const response = await fetch(`${API_URL}/api/resume/upload`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload resume");
    }

    return response.json();
}

// return matched jobs
export async function uploadResumeWithJobs(formData, countryCode = "ca") {
    const response = await fetch(`${API_URL}/api/resume/upload-with-jobs?countryCode=${countryCode}`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload resume and fetch jobs");
    }

    return response.json();
}