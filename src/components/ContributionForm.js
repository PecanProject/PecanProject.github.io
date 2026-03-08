import React, { useState, useRef } from 'react';
import styles from './ContributionForm.module.css';

export default function ContributionForm() {
  const [formData, setFormData] = useState({ name: '', email: '', idea: '', description: '', proposal: null });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'submitting', message: '' });

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus({ type: 'success', message: 'Thank you for your interest! Your contribution idea has been successfully submitted.' });
      setFormData({ name: '', email: '', idea: '', description: '', proposal: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset the file input visually
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred while submitting your proposal. Please try again later.' });
    } finally {
      // Return to idle state after showing success message for 5 seconds
      if (status.type !== 'error') {
         setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'proposal') {
      const file = e.target.files.length > 0 ? e.target.files[0] : null;
      setFormData({ ...formData, proposal: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const isSubmitting = status.type === 'submitting';

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Submit Your Contribution Idea</h3>
      
      {status.type === 'success' && (
        <div className="alert alert--success margin-bottom--md" role="alert" aria-live="polite">
          {status.message}
        </div>
      )}

      {status.type === 'error' && (
        <div className="alert alert--danger margin-bottom--md" role="alert" aria-live="polite">
          {status.message}
        </div>
      )}

      {(status.type === 'idle' || status.type === 'submitting' || status.type === 'error') && (
        <form onSubmit={handleSubmit} className={styles.form} noValidate={false}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>Name <span className="text--danger" aria-hidden="true">*</span></label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              className={styles.input}
              placeholder="e.g. Jane Doe"
              aria-required="true"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email <span className="text--danger" aria-hidden="true">*</span></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              className={styles.input}
              placeholder="e.g. jane.doe@example.com"
              aria-required="true"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="idea" className={styles.label}>Title of Idea/Task <span className="text--danger" aria-hidden="true">*</span></label>
            <input 
              type="text" 
              id="idea" 
              name="idea" 
              value={formData.idea} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              className={styles.input}
              placeholder="e.g. Improve documentation for module X"
              aria-required="true"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="description" className={styles.label}>Description <span className="text--danger" aria-hidden="true">*</span></label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              rows={5} 
              className={styles.textarea}
              placeholder="Provide a detailed description of your proposed contribution..."
              aria-required="true"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="proposal" className={styles.label}>
              Proposal Document <span className="text--muted" style={{ fontWeight: 'normal' }}>(Optional)</span>
            </label>
            <input 
              type="file" 
              id="proposal" 
              name="proposal" 
              accept=".pdf,.doc,.docx"
              onChange={handleChange} 
              disabled={isSubmitting}
              className={styles.fileInput}
              aria-describedby="proposal-help"
              ref={fileInputRef}
            />
            <small id="proposal-help" className="text--muted">Accepted formats: .pdf, .doc, .docx</small>
          </div>
          <button 
            type="submit" 
            className={`button button--primary ${styles.submitButton}`} 
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Idea'}
          </button>
        </form>
      )}
    </div>
  );
}
