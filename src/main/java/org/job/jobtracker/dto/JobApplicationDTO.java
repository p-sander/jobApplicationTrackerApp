package org.job.jobtracker.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.job.jobtracker.model.JobPortal;
import org.job.jobtracker.model.Stage;
import org.job.jobtracker.model.WorkMode;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobApplicationDTO{
    private Long id;
    private String companyName;
    private String positionTitle;
    private LocalDate applicationDate;
    private Stage rejected;
    private String offerLink;
    private String city;
    private WorkMode workMode;
    private JobPortal jobPortal;
}

