package org.job.jobtracker.mapper;

import org.job.jobtracker.dto.JobApplicationDTO;
import org.job.jobtracker.model.JobApplication;

//@Mapper(componentModel = "spring")
public interface JobApplicationMapper {
    JobApplicationDTO toDto(JobApplication entity);
    JobApplication toEntity(JobApplicationDTO dto);
}
