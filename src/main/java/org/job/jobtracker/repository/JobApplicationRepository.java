package org.job.jobtracker.repository;

import org.job.jobtracker.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByCompanyNameContainingIgnoreCase(String companyName);
    List<JobApplication> findByJobPortal(Enum jobPortal);
}
