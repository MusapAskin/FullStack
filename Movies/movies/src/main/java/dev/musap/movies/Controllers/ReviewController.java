package dev.musap.movies.Controllers;

import dev.musap.movies.Entitys.Review;
import dev.musap.movies.Services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload){
        return  new ResponseEntity<Review>(reviewService.creatReview(payload.get("reviewBody"),payload.get("imdbId")), HttpStatus.CREATED);
    }
}
