package rh.demo.consumer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.*;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;

@Configuration
public class OAuthClientConfiguration {

    @Value("${spring.security.oauth2.client.registration.rhsso.client-id}")
    String clientId;

    @Value("${spring.security.oauth2.client.registration.rhsso.client-secret}")
    String clientSecret;

    @Value("${spring.security.oauth2.client.registration.rhsso.authorization-grant-type}")
    String authorizationGrantType;

    @Value("${spring.security.oauth2.client.provider.rhsso.token-uri}")
    String tokenUri;

    @Bean
    public ClientRegistration rhssoClientRegistration(){
        return ClientRegistration.withRegistrationId("rhsso")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .authorizationGrantType(new AuthorizationGrantType(authorizationGrantType))
                .tokenUri(tokenUri)
                .build();
    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository(){
        return new InMemoryClientRegistrationRepository(rhssoClientRegistration());
    }

    @Bean
    public OAuth2AuthorizedClientService authorizedClientService(){
        return new InMemoryOAuth2AuthorizedClientService(clientRegistrationRepository());
    }

    @Bean
    public OAuth2AuthorizedClientManager authorizedClientManager(
            ClientRegistrationRepository clientRegistrationRepository,
            OAuth2AuthorizedClientService authorizedClientService) {

        OAuth2AuthorizedClientProvider authorizedClientProvider =
                OAuth2AuthorizedClientProviderBuilder.builder()
                        .clientCredentials()
                        .build();

        AuthorizedClientServiceOAuth2AuthorizedClientManager authorizedClientManager =
                new AuthorizedClientServiceOAuth2AuthorizedClientManager(
                        clientRegistrationRepository, authorizedClientService);
        authorizedClientManager.setAuthorizedClientProvider(authorizedClientProvider);

        return authorizedClientManager;
    }

}
