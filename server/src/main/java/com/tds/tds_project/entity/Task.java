package com.tds.tds_project.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @Column(name = "t_id")
    private Integer id;

    @Column(name = "t_name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(name = "t_progress", nullable = false)
    private Integer progress;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date begin;

    @Column(name = "\"end\"", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date end;

    @Column(name = "pr_id", nullable = false)
    private Integer projectId;

    // Геттеры и сеттеры
}
