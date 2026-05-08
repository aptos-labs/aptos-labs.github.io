// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item expanded "><li class="part-title">Move Standard Library </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/overview.html"><strong aria-hidden="true">1.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/acl.html"><strong aria-hidden="true">2.</strong> acl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/bcs.html"><strong aria-hidden="true">3.</strong> bcs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/bit_vector.html"><strong aria-hidden="true">4.</strong> bit_vector</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/cmp.html"><strong aria-hidden="true">5.</strong> cmp</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/error.html"><strong aria-hidden="true">6.</strong> error</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/features.html"><strong aria-hidden="true">7.</strong> features</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/fixed_point32.html"><strong aria-hidden="true">8.</strong> fixed_point32</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/hash.html"><strong aria-hidden="true">9.</strong> hash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/mem.html"><strong aria-hidden="true">10.</strong> mem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/option.html"><strong aria-hidden="true">11.</strong> option</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/reflect.html"><strong aria-hidden="true">12.</strong> reflect</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/result.html"><strong aria-hidden="true">13.</strong> result</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/signer.html"><strong aria-hidden="true">14.</strong> signer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/string.html"><strong aria-hidden="true">15.</strong> string</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="move-stdlib/vector.html"><strong aria-hidden="true">16.</strong> vector</a></span></li><li class="chapter-item expanded "><li class="part-title">Aptos Standard Library </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/overview.html"><strong aria-hidden="true">17.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/any.html"><strong aria-hidden="true">18.</strong> any</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/hash.html"><strong aria-hidden="true">19.</strong> aptos_hash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/bcs_stream.html"><strong aria-hidden="true">20.</strong> bcs_stream</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/big_vector.html"><strong aria-hidden="true">21.</strong> big_vector</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/bls12381.html"><strong aria-hidden="true">22.</strong> bls12381</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/bls12381_algebra.html"><strong aria-hidden="true">23.</strong> bls12381_algebra</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/bn254_algebra.html"><strong aria-hidden="true">24.</strong> bn254_algebra</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/capability.html"><strong aria-hidden="true">25.</strong> capability</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/comparator.html"><strong aria-hidden="true">26.</strong> comparator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/copyable_any.html"><strong aria-hidden="true">27.</strong> copyable_any</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/crypto_algebra.html"><strong aria-hidden="true">28.</strong> crypto_algebra</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/debug.html"><strong aria-hidden="true">29.</strong> debug</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/ed25519.html"><strong aria-hidden="true">30.</strong> ed25519</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/federated_keyless.html"><strong aria-hidden="true">31.</strong> federated_keyless</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/fixed_point64.html"><strong aria-hidden="true">32.</strong> fixed_point64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/from_bcs.html"><strong aria-hidden="true">33.</strong> from_bcs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/keyless.html"><strong aria-hidden="true">34.</strong> keyless</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/math128.html"><strong aria-hidden="true">35.</strong> math128</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/math64.html"><strong aria-hidden="true">36.</strong> math64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/math_fixed.html"><strong aria-hidden="true">37.</strong> math_fixed</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/math_fixed64.html"><strong aria-hidden="true">38.</strong> math_fixed64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/multi_ed25519.html"><strong aria-hidden="true">39.</strong> multi_ed25519</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/multi_key.html"><strong aria-hidden="true">40.</strong> multi_key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/pool_u64.html"><strong aria-hidden="true">41.</strong> pool_u64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/pool_u64_unbound.html"><strong aria-hidden="true">42.</strong> pool_u64_unbound</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/ristretto255.html"><strong aria-hidden="true">43.</strong> ristretto255</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/ristretto255_bulletproofs.html"><strong aria-hidden="true">44.</strong> ristretto255_bulletproofs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/ristretto255_elgamal.html"><strong aria-hidden="true">45.</strong> ristretto255_elgamal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/ristretto255_pedersen.html"><strong aria-hidden="true">46.</strong> ristretto255_pedersen</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/secp256k1.html"><strong aria-hidden="true">47.</strong> secp256k1</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/secp256r1.html"><strong aria-hidden="true">48.</strong> secp256r1</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/simple_map.html"><strong aria-hidden="true">49.</strong> simple_map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/single_key.html"><strong aria-hidden="true">50.</strong> single_key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/smart_table.html"><strong aria-hidden="true">51.</strong> smart_table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/smart_vector.html"><strong aria-hidden="true">52.</strong> smart_vector</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/storage_slots_allocator.html"><strong aria-hidden="true">53.</strong> storage_slots_allocator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/string_utils.html"><strong aria-hidden="true">54.</strong> string_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/table.html"><strong aria-hidden="true">55.</strong> table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/table_with_length.html"><strong aria-hidden="true">56.</strong> table_with_length</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-stdlib/type_info.html"><strong aria-hidden="true">57.</strong> type_info</a></span></li><li class="chapter-item expanded "><li class="part-title">Aptos Framework </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/overview.html"><strong aria-hidden="true">58.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/account.html"><strong aria-hidden="true">59.</strong> account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/account_abstraction.html"><strong aria-hidden="true">60.</strong> account_abstraction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aggregator.html"><strong aria-hidden="true">61.</strong> aggregator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aggregator_factory.html"><strong aria-hidden="true">62.</strong> aggregator_factory</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aggregator_v2.html"><strong aria-hidden="true">63.</strong> aggregator_v2</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aptos_account.html"><strong aria-hidden="true">64.</strong> aptos_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aptos_coin.html"><strong aria-hidden="true">65.</strong> aptos_coin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/aptos_governance.html"><strong aria-hidden="true">66.</strong> aptos_governance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/auth_data.html"><strong aria-hidden="true">67.</strong> auth_data</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/base16.html"><strong aria-hidden="true">68.</strong> base16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/big_ordered_map.html"><strong aria-hidden="true">69.</strong> big_ordered_map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/block.html"><strong aria-hidden="true">70.</strong> block</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/chain_id.html"><strong aria-hidden="true">71.</strong> chain_id</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/chain_status.html"><strong aria-hidden="true">72.</strong> chain_status</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/chunky_dkg.html"><strong aria-hidden="true">73.</strong> chunky_dkg</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/chunky_dkg_config.html"><strong aria-hidden="true">74.</strong> chunky_dkg_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/chunky_dkg_config_seqnum.html"><strong aria-hidden="true">75.</strong> chunky_dkg_config_seqnum</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/code.html"><strong aria-hidden="true">76.</strong> code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/coin.html"><strong aria-hidden="true">77.</strong> coin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/common_account_abstractions_utils.html"><strong aria-hidden="true">78.</strong> common_account_abstractions_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/confidential_amount.html"><strong aria-hidden="true">79.</strong> confidential_amount</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/confidential_asset.html"><strong aria-hidden="true">80.</strong> confidential_asset</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/confidential_balance.html"><strong aria-hidden="true">81.</strong> confidential_balance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/confidential_range_proofs.html"><strong aria-hidden="true">82.</strong> confidential_range_proofs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/config_buffer.html"><strong aria-hidden="true">83.</strong> config_buffer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/consensus_config.html"><strong aria-hidden="true">84.</strong> consensus_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/create_signer.html"><strong aria-hidden="true">85.</strong> create_signer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/decryption.html"><strong aria-hidden="true">86.</strong> decryption</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/delegation_pool.html"><strong aria-hidden="true">87.</strong> delegation_pool</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/dispatchable_fungible_asset.html"><strong aria-hidden="true">88.</strong> dispatchable_fungible_asset</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/dkg.html"><strong aria-hidden="true">89.</strong> dkg</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/ethereum_derivable_account.html"><strong aria-hidden="true">90.</strong> ethereum_derivable_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/event.html"><strong aria-hidden="true">91.</strong> event</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/execution_config.html"><strong aria-hidden="true">92.</strong> execution_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/function_info.html"><strong aria-hidden="true">93.</strong> function_info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/fungible_asset.html"><strong aria-hidden="true">94.</strong> fungible_asset</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/gas_schedule.html"><strong aria-hidden="true">95.</strong> gas_schedule</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/genesis.html"><strong aria-hidden="true">96.</strong> genesis</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/governance_proposal.html"><strong aria-hidden="true">97.</strong> governance_proposal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/guid.html"><strong aria-hidden="true">98.</strong> guid</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/jwk_consensus_config.html"><strong aria-hidden="true">99.</strong> jwk_consensus_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/jwks.html"><strong aria-hidden="true">100.</strong> jwks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/keyless_account.html"><strong aria-hidden="true">101.</strong> keyless_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/managed_coin.html"><strong aria-hidden="true">102.</strong> managed_coin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/multisig_account.html"><strong aria-hidden="true">103.</strong> multisig_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/nonce_validation.html"><strong aria-hidden="true">104.</strong> nonce_validation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/object.html"><strong aria-hidden="true">105.</strong> object</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/object_code_deployment.html"><strong aria-hidden="true">106.</strong> object_code_deployment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/optional_aggregator.html"><strong aria-hidden="true">107.</strong> optional_aggregator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/ordered_map.html"><strong aria-hidden="true">108.</strong> ordered_map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/permissioned_delegation.html"><strong aria-hidden="true">109.</strong> permissioned_delegation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/permissioned_signer.html"><strong aria-hidden="true">110.</strong> permissioned_signer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/primary_fungible_store.html"><strong aria-hidden="true">111.</strong> primary_fungible_store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/randomness.html"><strong aria-hidden="true">112.</strong> randomness</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/randomness_api_v0_config.html"><strong aria-hidden="true">113.</strong> randomness_api_v0_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/randomness_config.html"><strong aria-hidden="true">114.</strong> randomness_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/randomness_config_seqnum.html"><strong aria-hidden="true">115.</strong> randomness_config_seqnum</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/rate_limiter.html"><strong aria-hidden="true">116.</strong> rate_limiter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/reconfiguration.html"><strong aria-hidden="true">117.</strong> reconfiguration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/reconfiguration_state.html"><strong aria-hidden="true">118.</strong> reconfiguration_state</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/reconfiguration_with_dkg.html"><strong aria-hidden="true">119.</strong> reconfiguration_with_dkg</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/resource_account.html"><strong aria-hidden="true">120.</strong> resource_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol.html"><strong aria-hidden="true">121.</strong> sigma_protocol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_fiat_shamir.html"><strong aria-hidden="true">122.</strong> sigma_protocol_fiat_shamir</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_homomorphism.html"><strong aria-hidden="true">123.</strong> sigma_protocol_homomorphism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_key_rotation.html"><strong aria-hidden="true">124.</strong> sigma_protocol_key_rotation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_proof.html"><strong aria-hidden="true">125.</strong> sigma_protocol_proof</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_registration.html"><strong aria-hidden="true">126.</strong> sigma_protocol_registration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_representation.html"><strong aria-hidden="true">127.</strong> sigma_protocol_representation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_representation_vec.html"><strong aria-hidden="true">128.</strong> sigma_protocol_representation_vec</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_statement.html"><strong aria-hidden="true">129.</strong> sigma_protocol_statement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_statement_builder.html"><strong aria-hidden="true">130.</strong> sigma_protocol_statement_builder</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_transfer.html"><strong aria-hidden="true">131.</strong> sigma_protocol_transfer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_utils.html"><strong aria-hidden="true">132.</strong> sigma_protocol_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_withdraw.html"><strong aria-hidden="true">133.</strong> sigma_protocol_withdraw</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sigma_protocol_witness.html"><strong aria-hidden="true">134.</strong> sigma_protocol_witness</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/solana_derivable_account.html"><strong aria-hidden="true">135.</strong> solana_derivable_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/stake.html"><strong aria-hidden="true">136.</strong> stake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/staking_config.html"><strong aria-hidden="true">137.</strong> staking_config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/staking_contract.html"><strong aria-hidden="true">138.</strong> staking_contract</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/staking_proxy.html"><strong aria-hidden="true">139.</strong> staking_proxy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/state_storage.html"><strong aria-hidden="true">140.</strong> state_storage</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/storage_gas.html"><strong aria-hidden="true">141.</strong> storage_gas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/storage_slot.html"><strong aria-hidden="true">142.</strong> storage_slot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/storage_slot_or_inline.html"><strong aria-hidden="true">143.</strong> storage_slot_or_inline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/sui_derivable_account.html"><strong aria-hidden="true">144.</strong> sui_derivable_account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/system_addresses.html"><strong aria-hidden="true">145.</strong> system_addresses</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/timestamp.html"><strong aria-hidden="true">146.</strong> timestamp</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/transaction_context.html"><strong aria-hidden="true">147.</strong> transaction_context</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/transaction_fee.html"><strong aria-hidden="true">148.</strong> transaction_fee</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/transaction_limits.html"><strong aria-hidden="true">149.</strong> transaction_limits</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/transaction_validation.html"><strong aria-hidden="true">150.</strong> transaction_validation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/util.html"><strong aria-hidden="true">151.</strong> util</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/validator_consensus_info.html"><strong aria-hidden="true">152.</strong> validator_consensus_info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/version.html"><strong aria-hidden="true">153.</strong> version</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/vesting.html"><strong aria-hidden="true">154.</strong> vesting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-framework/voting.html"><strong aria-hidden="true">155.</strong> voting</a></span></li><li class="chapter-item expanded "><li class="part-title">Aptos Token Objects </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/overview.html"><strong aria-hidden="true">156.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/aptos_token.html"><strong aria-hidden="true">157.</strong> aptos_token</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/collection.html"><strong aria-hidden="true">158.</strong> collection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/property_map.html"><strong aria-hidden="true">159.</strong> property_map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/royalty.html"><strong aria-hidden="true">160.</strong> royalty</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-token-objects/token.html"><strong aria-hidden="true">161.</strong> token</a></span></li><li class="chapter-item expanded "><li class="part-title">Aptos Trading Framework </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-trading/overview.html"><strong aria-hidden="true">162.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-trading/bulk_order_types.html"><strong aria-hidden="true">163.</strong> bulk_order_types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-trading/order_book_types.html"><strong aria-hidden="true">164.</strong> order_book_types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-trading/order_match_types.html"><strong aria-hidden="true">165.</strong> order_match_types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-trading/single_order_types.html"><strong aria-hidden="true">166.</strong> single_order_types</a></span></li><li class="chapter-item expanded "><li class="part-title">Aptos Experimental Framework </li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/overview.html"><strong aria-hidden="true">167.</strong> Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/benchmark_utils.html"><strong aria-hidden="true">168.</strong> benchmark_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/bulk_order_book.html"><strong aria-hidden="true">169.</strong> bulk_order_book</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/bulk_order_utils.html"><strong aria-hidden="true">170.</strong> bulk_order_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/dead_mans_switch_operations.html"><strong aria-hidden="true">171.</strong> dead_mans_switch_operations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/dead_mans_switch_tracker.html"><strong aria-hidden="true">172.</strong> dead_mans_switch_tracker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/large_packages.html"><strong aria-hidden="true">173.</strong> large_packages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/market_bulk_order.html"><strong aria-hidden="true">174.</strong> market_bulk_order</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/market_clearinghouse_order_info.html"><strong aria-hidden="true">175.</strong> market_clearinghouse_order_info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/market_types.html"><strong aria-hidden="true">176.</strong> market_types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/order_book.html"><strong aria-hidden="true">177.</strong> order_book</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/order_book_utils.html"><strong aria-hidden="true">178.</strong> order_book_utils</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/order_id_generation.html"><strong aria-hidden="true">179.</strong> order_id_generation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/order_operations.html"><strong aria-hidden="true">180.</strong> order_operations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/order_placement.html"><strong aria-hidden="true">181.</strong> order_placement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/pending_order_book_index.html"><strong aria-hidden="true">182.</strong> pending_order_book_index</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/pre_cancellation_tracker.html"><strong aria-hidden="true">183.</strong> pre_cancellation_tracker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/price_time_index.html"><strong aria-hidden="true">184.</strong> price_time_index</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/single_order_book.html"><strong aria-hidden="true">185.</strong> single_order_book</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/test_derivable_account_abstraction_ed25519_hex.html"><strong aria-hidden="true">186.</strong> test_derivable_account_abstraction_ed25519_hex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aptos-experimental/test_function_values.html"><strong aria-hidden="true">187.</strong> test_function_values</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

